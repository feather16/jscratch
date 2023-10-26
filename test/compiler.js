"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const antlr4ts_1 = require("antlr4ts");
const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
const JScratchLexer_1 = require("./antlr/JScratchLexer");
const JScratchParser_1 = require("./antlr/JScratchParser");
const assert_1 = __importDefault(require("assert"));
const ScratchObject_1 = require("./ScratchObject");
const builtin_1 = require("./builtin");
const functions_1 = require("./functions");
const encoder_1 = require("./encoder");
const operatorNameMap = {
    '+': 'add',
    '-': 'sub',
    '*': 'mul',
    '/': 'div',
    '%': 'mod',
    '==': 'eq',
    '!=': 'neq',
    '>': 'gt',
    '>=': 'ge',
    '<': 'lt',
    '<=': 'le',
    '|': 'or',
    '&': 'and',
};
class Listener {
    constructor() {
        this.outputLines = [];
        this.comments = {};
        this.labels = {};
        this.labelCount = 0;
        this.objects = {};
        this.functions = {};
        this.scope = '';
        this.dataSize = 0;
        this.operatorStack = [];
    }
    // ユーティリティ
    writeCode(...code) {
        for (const c of code) {
            this.outputLines.push(c.toString());
        }
    }
    addLabelAfter(label) {
        while (this.outputLines.length in this.labels) { // 既にラベルがあれば
            this.writeCode('nop');
        }
        this.labels[this.outputLines.length] = label;
    }
    addComment(comment, index) {
        if (index in this.comments) { // 既にコメントがあれば
            this.comments[index] += ', ' + comment;
        }
        else {
            this.comments[index] = comment;
        }
    }
    addCommentBefore(comment) {
        this.addComment(comment, this.outputLines.length - 1);
    }
    addCommentAfter(comment) {
        this.addComment(comment, this.outputLines.length);
    }
    parseConstant(constantNode) {
        let value = constantNode.toString();
        if (value[0] == '\'' || value[0] == '"') { // 文字列の場合
            value = value.substring(1, value.length - 1);
        }
        else if (value[0] == '#') { // 文字列サイズの場合
            const arrayName = value.substring(1);
            (0, assert_1.default)(arrayName in this.objects, `${arrayName} does not exist.`);
            const array = this.getObjectByName(arrayName);
            (0, assert_1.default)(array.size > 1, `${arrayName} is not array.`);
        }
        else { // 数値の場合
            value = parseFloat(value);
        }
        return value;
    }
    getVarNameInScope(varName) {
        if (this.scope == '') {
            return varName;
        }
        else {
            return `__${this.scope}__${varName}`;
        }
    }
    getObjectByName(varName) {
        const varNameInFunc = this.getVarNameInScope(varName);
        if (varNameInFunc in this.objects) {
            return this.objects[varNameInFunc];
        }
        else {
            (0, assert_1.default)(varName in this.objects, `Unknown name ${varName}`);
            return this.objects[varName];
        }
    }
    callUserDefinedFunc(func) {
        this.writeCode('push', func.argAddress, 'push', func.numArgs, 'setarray');
        const returnLabel = `L_FUNC_RET_${func.name}_${this.labelCount}`;
        this.labelCount++;
        this.writeCode('push', `@${returnLabel}`);
        this.writeCode('goto', `@L_FUNC_${func.name}`);
        this.addLabelAfter(returnLabel);
        this.addCommentAfter(`user-defined ${func.hasReturnValue ? 'func' : 'proc'} ${func.name} return`);
        this.writeCode('nop');
    }
    // 変数類初期化
    varInit(ctx) {
        const isConst = ctx instanceof JScratchParser_1.ConstVarInitContext;
        const varName = this.getVarNameInScope(ctx.IDENTIFIER().toString());
        const address = this.dataSize + 1;
        const variable = new ScratchObject_1.ScratchObject(varName, address);
        variable.isConst = isConst;
        (0, assert_1.default)(!(varName in this.objects), `${varName} is already exist.`);
        this.objects[varName] = variable;
        const type = isConst ? 'const' : 'var';
        const hasInitValue = ctx.expression() !== undefined;
        if (hasInitValue) {
            this.addCommentAfter(`${type} ${varName} (@${address})`);
            this.writeCode('push', address);
        }
        this.dataSize++;
    }
    arrayInit(ctx) {
        const isConst = ctx instanceof JScratchParser_1.ConstArrayInitContext;
        const arrayName = this.getVarNameInScope(ctx.IDENTIFIER().toString());
        const address = this.dataSize + 1;
        const expressions = ctx.expression();
        let size;
        // サイズが指定されている場合
        if (ctx.CONSTANT() !== undefined) {
            const s = this.parseConstant(ctx.CONSTANT());
            (0, assert_1.default)(typeof s == 'number');
            size = s;
            (0, assert_1.default)(expressions.length == 0 || expressions.length == size, `array length ${expressions.length} does not match ${arrayName}[${size}].`);
        }
        else {
            size = expressions.length;
        }
        (0, assert_1.default)(Number.isInteger(size) && size > 0, `Array size must be positive integer, but given ${size}`);
        const array = new ScratchObject_1.ScratchObject(arrayName, address, size);
        array.isConst = isConst;
        (0, assert_1.default)(!(arrayName in this.objects), `${arrayName} is already exist.`);
        this.objects[arrayName] = array;
        this.dataSize += size;
        if (expressions.length > 0) { // 配列の初期化
            const _this = this;
            for (let i = 0; i < expressions.length; i++) {
                expressions[i].enterRule = function (listener) {
                    var _a;
                    if (i == 0) {
                        _this.addCommentAfter(`start array init ${arrayName}[0 .. ${expressions.length - 1}]`);
                    }
                    _this.addCommentAfter(`array init ${arrayName}[${i}]`);
                    (_a = listener.enterExpression) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                };
            }
            expressions[expressions.length - 1].exitRule = function (listener) {
                var _a;
                (_a = listener.exitExpression) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                _this.writeCode('push', array.address, 'push', expressions.length, 'setarray');
                _this.addCommentBefore(`end array init ${arrayName}[0 .. ${expressions.length - 1}]`);
            };
        }
    }
    enterVarInit(ctx) {
        this.varInit(ctx);
    }
    enterConstVarInit(ctx) {
        this.varInit(ctx);
    }
    exitVarInit(ctx) {
        const hasInitValue = ctx.expression() !== undefined;
        if (hasInitValue) {
            this.writeCode('set');
        }
    }
    exitConstVarInit(ctx) {
        this.writeCode('set');
    }
    enterArrayInit(ctx) {
        this.arrayInit(ctx);
    }
    enterConstArrayInit(ctx) {
        this.arrayInit(ctx);
    }
    enterConstExprVarInit(ctx) {
        const name = ctx.IDENTIFIER().toString();
        (0, assert_1.default)(!(name in this.objects), `${name} is already exist.`);
        const constExpr = new ScratchObject_1.ScratchObject(name, undefined);
        constExpr.value = this.parseConstant(ctx.CONSTANT());
        constExpr.isConst = true;
        this.objects[name] = constExpr;
    }
    exitEntry(ctx) {
        this.writeCode('nop');
    }
    enterIfStatement(ctx) {
        this.addCommentAfter(`if (line ${ctx.start.line})`);
        const hasElse = ctx.statement().length == 2;
        const condition = ctx.expression();
        const label = `L_ENDIF_${this.labelCount}`;
        let elseLabel = undefined;
        if (hasElse) {
            elseLabel = `L_ENDELSE_${this.labelCount}`;
        }
        this.labelCount++;
        const _this = this;
        condition.exitRule = function (listener) {
            var _a;
            (_a = listener.exitExpression) === null || _a === void 0 ? void 0 : _a.call(listener, this);
            _this.writeCode('not', 'gotoif', `@${label}`);
            _this.addCommentAfter('then');
        };
        ctx.statement()[0].exitRule = function (listener) {
            var _a;
            (_a = listener.exitStatement) === null || _a === void 0 ? void 0 : _a.call(listener, this);
            if (hasElse) {
                _this.writeCode('goto', `@${elseLabel}`);
                _this.addCommentAfter('else');
            }
            _this.addLabelAfter(label);
        };
        if (hasElse) {
            ctx.statement()[1].exitRule = function (listener) {
                var _a;
                (_a = listener.exitStatement) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                _this.addLabelAfter(elseLabel);
            };
        }
    }
    exitIfStatement(ctx) {
        this.addCommentBefore('end if');
    }
    enterWhileStatement(ctx) {
        const condition = ctx.expression();
        const startLabel = `L_WHILE_${this.labelCount}`;
        const endLabel = `L_ENDWHILE_${this.labelCount}`;
        this.labelCount++;
        this.addLabelAfter(startLabel);
        this.addCommentAfter(`while (line ${ctx.start.line})`);
        const _this = this;
        condition.exitRule = function (listener) {
            var _a;
            (_a = listener.exitExpression) === null || _a === void 0 ? void 0 : _a.call(listener, this);
            _this.writeCode('not', 'gotoif', `@${endLabel}`);
            _this.addCommentAfter('do');
        };
        ctx.statement().exitRule = function (listener) {
            var _a;
            (_a = listener.exitStatement) === null || _a === void 0 ? void 0 : _a.call(listener, this);
            _this.writeCode('goto', `@${startLabel}`);
            _this.addLabelAfter(endLabel);
        };
    }
    exitWhileStatement(ctx) {
        this.addCommentBefore('end while');
    }
    enterConstant(ctx) {
        const value = this.parseConstant(ctx.CONSTANT());
        this.writeCode('push', value);
    }
    enterAssign(ctx) {
        this.addCommentAfter('assign');
        const name = ctx.start.text;
        const object = this.getObjectByName(name);
        (0, assert_1.default)(!object.isConst, `${name} is constant.`);
    }
    exitAssign(ctx) {
        this.writeCode('set');
    }
    enterCompoundAssign(ctx) {
        this.addCommentAfter(`compound assign (${ctx.COMPOUND_ASSIGN_OPERATOR().toString()})`);
        const name = ctx.start.text;
        const object = this.getObjectByName(name);
        (0, assert_1.default)(!object.isConst, `${name} is constant.`);
        const _this = this;
        ctx.address().exitRule = function (listener) {
            var _a;
            (_a = listener.exitAddress) === null || _a === void 0 ? void 0 : _a.call(listener, this);
            _this.writeCode('copy', 'ref');
        };
    }
    exitCompoundAssign(ctx) {
        let operator = ctx.COMPOUND_ASSIGN_OPERATOR().toString();
        operator = operator.substring(0, operator.length - 1);
        this.writeCode(operatorNameMap[operator], 'set');
    }
    address(ctx) {
        const isArray = ctx instanceof JScratchParser_1.ArrayAddressContext;
        const varName = ctx.IDENTIFIER().toString();
        const variable = this.getObjectByName(varName);
        if (variable.isConstExpr) {
            this.writeCode('push', this.objects[varName].value);
        }
        else {
            this.writeCode('push', variable.address);
        }
    }
    enterVarAddress(ctx) {
        this.address(ctx);
    }
    enterArrayAddress(ctx) {
        this.address(ctx);
    }
    exitArrayAddress(ctx) {
        this.writeCode('add');
    }
    exitRef(ctx) {
        const varName = ctx.start.text;
        const variable = this.getObjectByName(varName);
        if (!variable.isConstExpr) {
            this.writeCode('ref');
        }
    }
    enterExpression(ctx) {
        const numOperators = ctx.LOGICAL_ADD_OPERATOR().length;
        for (let i = 0; i < numOperators; i++) {
            const operator = ctx.LOGICAL_ADD_OPERATOR(i).toString();
            const termCtx = ctx.logicalTerm(i + 1);
            const _this = this;
            termCtx.exitRule = function (listener) {
                var _a;
                (_a = listener.exitLogicalTerm) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                _this.writeCode(operatorNameMap[operator]);
            };
        }
    }
    enterLogicalTerm(ctx) {
        const numOperators = ctx.LOGICAL_MUL_OPERATOR().length;
        for (let i = 0; i < numOperators; i++) {
            const operator = ctx.LOGICAL_MUL_OPERATOR(i).toString();
            const factorCtx = ctx.logicalFactor(i + 1);
            const _this = this;
            factorCtx.exitRule = function (listener) {
                var _a;
                (_a = listener.exitLogicalFactor) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                _this.writeCode(operatorNameMap[operator]);
            };
        }
    }
    enterLogicalFactor(ctx) {
        var _a;
        const _this = this;
        if (ctx.LOGICAL_NOT_OPERATOR() !== undefined) { // NOTの場合
            if (ctx.factor() !== undefined) {
                ctx.factor().exitRule = function (listener) {
                    var _a;
                    (_a = listener.exitFactor) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                    _this.writeCode('not');
                };
            }
            else {
                ctx.expression().exitRule = function (listener) {
                    var _a;
                    (_a = listener.exitExpression) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                    _this.writeCode('not');
                };
            }
        }
        else {
            const hasOperator = ctx.REL_OPERATOR() !== undefined;
            if (hasOperator) {
                const operator = (_a = ctx.REL_OPERATOR()) === null || _a === void 0 ? void 0 : _a.toString();
                ctx.simpleExpression()[1].exitRule = function (listener) {
                    var _a;
                    (_a = listener.exitSimpleExpression) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                    _this.writeCode(operatorNameMap[operator]);
                };
            }
        }
    }
    enterSimpleExpression(ctx) {
        const numOperators = ctx.ADD_OPERATOR().length;
        for (let i = 0; i < numOperators; i++) {
            const operator = ctx.ADD_OPERATOR(i).toString();
            const termCtx = ctx.term(i + 1);
            const _this = this;
            termCtx.exitRule = function (listener) {
                var _a;
                (_a = listener.exitTerm) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                _this.writeCode(operatorNameMap[operator]);
            };
        }
    }
    enterTerm(ctx) {
        const numOperators = ctx.MUL_OPERATOR().length;
        for (let i = 0; i < numOperators; i++) {
            const operator = ctx.MUL_OPERATOR(i).toString();
            const factorCtx = ctx.factor(i + 1);
            const _this = this;
            factorCtx.exitRule = function (listener) {
                var _a;
                (_a = listener.exitFactor) === null || _a === void 0 ? void 0 : _a.call(listener, this);
                _this.writeCode(operatorNameMap[operator]);
            };
        }
    }
    enterFuncDef(ctx) {
        const funcName = ctx.IDENTIFIER()[0].toString();
        const argNames = ctx.IDENTIFIER().slice(1).map(node => node.toString());
        const hasReturnValue = ctx.expression() !== undefined;
        (0, assert_1.default)(!(funcName in this.functions) && !(funcName in builtin_1.builtInFuncs) && !(funcName in builtin_1.builtInProcs), `${funcName} is already defined.`);
        this.scope = funcName;
        const func = new functions_1.Func(funcName, argNames.length, hasReturnValue);
        func.argAddress = this.dataSize + 1;
        this.functions[funcName] = func;
        this.addCommentAfter(`definition of function ${funcName} start`);
        for (const argName of argNames) {
            const varNameInScope = this.getVarNameInScope(argName);
            const variable = new ScratchObject_1.ScratchObject(varNameInScope, this.dataSize + 1);
            this.objects[varNameInScope] = variable;
            this.dataSize++;
        }
        this.writeCode('goto', `@L_FUNC_SKIP_${funcName}`);
        this.addLabelAfter(`L_FUNC_${funcName}`);
    }
    exitFuncDef(ctx) {
        const funcName = ctx.IDENTIFIER()[0].toString();
        const func = this.functions[funcName];
        if (func.hasReturnValue) {
            this.writeCode('swap');
        }
        this.writeCode('ret');
        this.addLabelAfter(`L_FUNC_SKIP_${funcName}`);
        this.writeCode('nop');
        this.addCommentBefore(`definition of function ${funcName} end`);
        this.scope = '';
    }
    enterFuncCall(ctx) {
        const funcName = ctx.IDENTIFIER().toString();
        const numGivenArgs = ctx.expression().length;
        const builtInFunc = builtin_1.builtInFuncs.find(f => f.name == funcName);
        if (builtInFunc !== undefined) {
            (0, assert_1.default)(numGivenArgs == builtInFunc.numArgs, `${builtInFunc.name} takes ${builtInFunc.numArgs} arguments, but given ${numGivenArgs} arguments.`);
            this.addCommentAfter(`call build-in func ${funcName}`);
        }
        else {
            // 自作関数の場合
            (0, assert_1.default)(funcName in this.functions, `${funcName} does not exist.`);
            const func = this.functions[funcName];
            (0, assert_1.default)(func.hasReturnValue, `${funcName} has no return value.`);
            (0, assert_1.default)(numGivenArgs == func.numArgs, `${func.name} takes ${func.numArgs} arguments, but given ${numGivenArgs} arguments.`);
            this.addCommentAfter(`call user-defined func ${funcName}`);
        }
    }
    exitFuncCall(ctx) {
        const funcName = ctx.IDENTIFIER().toString();
        const builtInFunc = builtin_1.builtInFuncs.find(f => f.name == funcName);
        if (builtInFunc !== undefined) {
            this.writeCode(funcName);
        }
        else {
            // 自作関数の場合
            const func = this.functions[funcName];
            this.callUserDefinedFunc(func);
        }
    }
    enterProcCall(ctx) {
        const procName = ctx.IDENTIFIER().toString();
        const numGivenArgs = ctx.expression().length;
        const builtInProc = builtin_1.builtInProcs.find(f => f.name == procName);
        if (builtInProc !== undefined) {
            (0, assert_1.default)(numGivenArgs == builtInProc.numArgs, `${builtInProc.name} takes ${builtInProc.numArgs} arguments, but given ${numGivenArgs} arguments.`);
            this.addCommentAfter(`call build-in proc ${procName}`);
        }
        else {
            // 自作関数の場合
            (0, assert_1.default)(procName in this.functions, `${procName} does not exist.`);
            const proc = this.functions[procName];
            (0, assert_1.default)(numGivenArgs == proc.numArgs, `${proc.name} takes ${proc.numArgs} arguments, but given ${numGivenArgs} arguments.`);
            this.addCommentAfter(`call user-defined proc ${procName}`);
        }
    }
    exitProcCall(ctx) {
        // const procName = ctx.IDENTIFIER().toString();
        // this.writeCode(procName);
        const procName = ctx.IDENTIFIER().toString();
        const builtInProc = builtin_1.builtInProcs.find(f => f.name == procName);
        if (builtInProc !== undefined) {
            this.writeCode(procName);
        }
        else {
            // 自作関数の場合
            const func = this.functions[procName];
            this.callUserDefinedFunc(func);
        }
    }
    compile() {
        const numLines = this.outputLines.length;
        let lines = [];
        for (let i = 0; i < numLines; i++) {
            let line = '';
            if (i in this.labels) {
                line += this.labels[i] + ':';
            }
            line += this.outputLines[i];
            lines.push(line);
        }
        const maxLength = lines.reduce((length, str) => Math.max(length, str.length), 0);
        for (let i = 0; i < numLines; i++) {
            if (i in this.comments) {
                lines[i] += ' '.repeat(maxLength - lines[i].length) + '  # ' + this.comments[i];
            }
        }
        return lines.join('\n');
    }
}
function compile(inputCode) {
    const originalConsoleError = console.error;
    console.error = e => {
        throw new Error(e.toString());
    };
    try {
        const inputStream = antlr4ts_1.CharStreams.fromString(inputCode);
        const lexer = new JScratchLexer_1.JScratchLexer(inputStream);
        const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        const parser = new JScratchParser_1.JScratchParser(tokenStream);
        const tree = parser.entry();
        const listener = new Listener();
        ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(listener, tree);
        const intermediateCode = listener.compile();
        const assemblyCode = new encoder_1.Encoder().encode(intermediateCode);
        return { 'assemblyCode': assemblyCode, 'intermediateCode': intermediateCode };
    }
    catch (e) {
        throw e;
    }
    finally {
        console.error = originalConsoleError;
    }
}
exports.compile = compile;
