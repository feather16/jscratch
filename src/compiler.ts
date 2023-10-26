import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { JScratchLexer } from './antlr/JScratchLexer'
import { JScratchListener } from './antlr/JScratchListener'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import {
    JScratchParser,

    // 変数類初期化
    VarInitContext,
    ConstVarInitContext,
    ArrayInitContext,
    ConstArrayInitContext,
    ConstExprVarInitContext,

    EntryContext,
    ConstantContext,
    AssignContext,
    CompoundAssignContext,
    VarAddressContext,
    ArrayAddressContext,
    RefContext,
    ProcCallContext,
    ExpressionContext,
    LogicalTermContext,
    LogicalFactorContext,
    SimpleExpressionContext,
    TermContext,
    FuncCallContext,
    IfStatementContext,
    WhileStatementContext,
    FuncDefContext,
} from './antlr/JScratchParser'

import assert from 'assert'
import { ScratchObject } from './ScratchObject';
import { builtInFuncs, builtInProcs } from './builtin';
import { Func } from './functions';
import { Encoder } from './encoder';

const operatorNameMap: { [key: string]: string } = {
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

class Listener implements JScratchListener{
    outputLines: string[] = [];
    comments: { [key: number]: string; } = {};
    labels: { [key: number]: string; } = {};
    labelCount: number = 0;
    objects: { [key: string]: ScratchObject; } = {};
    functions: { [key: string]: Func; } = {};
    scope: string = '';
    dataSize: number = 0;
    operatorStack: string[] = [];

    // ユーティリティ
    private writeCode(...code: (string | number)[]): void{
        for(const c of code){
            this.outputLines.push(c.toString());
        }
    }
    private addLabelAfter(label: string): void{
        while(this.outputLines.length in this.labels){ // 既にラベルがあれば
            this.writeCode('nop');
        }
        this.labels[this.outputLines.length] = label;
    }
    private addComment(comment: string, index: number): void{
        if(index in this.comments){ // 既にコメントがあれば
            this.comments[index] += ', ' + comment;
        }
        else{
            this.comments[index] = comment;
        }
    }
    private addCommentBefore(comment: string): void{
        this.addComment(comment, this.outputLines.length - 1);
    }
    private addCommentAfter(comment: string): void{
        this.addComment(comment, this.outputLines.length);
    }
    private parseConstant(constantNode: TerminalNode){
        let value: string | number = constantNode.toString();
        if(value[0] == '\'' || value[0] == '"'){ // 文字列の場合
            value = value.substring(1, value.length - 1);
        }
        else if(value[0] == '#'){ // 文字列サイズの場合
            const arrayName = value.substring(1);
            assert(arrayName in this.objects, `${arrayName} does not exist.`);
            const array = this.getObjectByName(arrayName);
            assert(array.size > 1, `${arrayName} is not array.`);
        }
        else{ // 数値の場合
            value = parseFloat(value);
        }
        return value;
    }
    private getVarNameInScope(varName: string): string{
        if(this.scope == ''){
            return varName;
        }
        else{
            return `__${this.scope}__${varName}`;
        }
    }
    private getObjectByName(varName: string): ScratchObject{
        const varNameInFunc = this.getVarNameInScope(varName);
        if(varNameInFunc in this.objects){
            return this.objects[varNameInFunc];
        }
        else{
            assert(varName in this.objects, `Unknown name ${varName}`);
            return this.objects[varName];
        }
    }
    private callUserDefinedFunc(func: Func): void{
        this.writeCode('push', func.argAddress!, 'push', func.numArgs, 'setarray');
        const returnLabel = `L_FUNC_RET_${func.name}_${this.labelCount}`;
        this.labelCount++;
        this.writeCode('push', `@${returnLabel}`);
        this.writeCode('goto', `@L_FUNC_${func.name}`);
        this.addLabelAfter(returnLabel);
        this.addCommentAfter(
            `user-defined ${func.hasReturnValue ? 'func' : 'proc'} ${func.name} return`
        );
        this.writeCode('nop');
    }

    // 変数類初期化
    private varInit(ctx: VarInitContext | ConstVarInitContext): void{
        const isConst = ctx instanceof ConstVarInitContext;
        const varName = this.getVarNameInScope(ctx.IDENTIFIER().toString());
        const address = this.dataSize + 1;
        const variable = new ScratchObject(varName, address);
        variable.isConst = isConst;
        assert(!(varName in this.objects), `${varName} is already exist.`);
        this.objects[varName] = variable;
        const type = isConst ? 'const' : 'var';
        const hasInitValue = ctx.expression() !== undefined;
        if(hasInitValue){
            this.addCommentAfter(`${type} ${varName} (@${address})`);
            this.writeCode('push', address);
        }
        this.dataSize++;
    }
    private arrayInit(ctx: ArrayInitContext | ConstArrayInitContext): void{
        const isConst = ctx instanceof ConstArrayInitContext;
        const arrayName = this.getVarNameInScope(ctx.IDENTIFIER().toString());
        const address = this.dataSize + 1;
        const expressions = ctx.expression();
        let size: number;
        // サイズが指定されている場合
        if(ctx.CONSTANT() !== undefined){
            const s = this.parseConstant(ctx.CONSTANT()!);
            assert(typeof s == 'number');
            size = s;
            assert(
                expressions.length == 0 || expressions.length == size, 
                `array length ${expressions.length} does not match ${arrayName}[${size}].`
            );
        }
        else{
            size = expressions.length;
        }
        assert(
            Number.isInteger(size) && size > 0, 
            `Array size must be positive integer, but given ${size}`
        );
        const array = new ScratchObject(arrayName, address, size);
        array.isConst = isConst;
        assert(!(arrayName in this.objects), `${arrayName} is already exist.`);
        this.objects[arrayName] = array;
        this.dataSize += size;
        if(expressions.length > 0){ // 配列の初期化
            const _this = this;
            for(let i = 0; i < expressions.length; i++){
                expressions[i].enterRule = function(listener){
                    if(i == 0){
                        _this.addCommentAfter(`start array init ${arrayName}[0 .. ${expressions.length - 1}]`);
                    }
                    _this.addCommentAfter(`array init ${arrayName}[${i}]`);
                    listener.enterExpression?.(this);
                };
            }
            expressions[expressions.length - 1].exitRule = function(listener){
                listener.exitExpression?.(this);
                _this.writeCode(
                    'push', array.address!, 
                    'push', expressions.length, 
                    'setarray',
                );
                _this.addCommentBefore(`end array init ${arrayName}[0 .. ${expressions.length - 1}]`);
            };
        }
    }
    enterVarInit(ctx: VarInitContext): void{
        this.varInit(ctx);
    }
    enterConstVarInit(ctx: ConstVarInitContext): void{
        this.varInit(ctx);
    }
    exitVarInit(ctx: VarInitContext): void{
        const hasInitValue = ctx.expression() !== undefined;
        if(hasInitValue){
            this.writeCode('set');
        }
    }
    exitConstVarInit(ctx: ConstVarInitContext): void{
        this.writeCode('set');
    }
    enterArrayInit(ctx: ArrayInitContext): void{
        this.arrayInit(ctx);
    }
    enterConstArrayInit(ctx: ConstArrayInitContext): void{
        this.arrayInit(ctx);
    }
    enterConstExprVarInit(ctx: ConstExprVarInitContext): void{
        const name = ctx.IDENTIFIER().toString();
        assert(!(name in this.objects), `${name} is already exist.`);
        const constExpr = new ScratchObject(name, undefined);
        constExpr.value = this.parseConstant(ctx.CONSTANT());
        constExpr.isConst = true;
        this.objects[name] = constExpr;
    }

    exitEntry(ctx: EntryContext): void{
        this.writeCode('nop');
    }
    enterIfStatement(ctx: IfStatementContext): void{
        this.addCommentAfter(`if (line ${ctx.start.line})`);
        const hasElse = ctx.statement().length == 2;
        const condition = ctx.expression();
        const label = `L_ENDIF_${this.labelCount}`;
        let elseLabel: string | undefined = undefined;
        if(hasElse){
            elseLabel = `L_ENDELSE_${this.labelCount}`;
        }
        this.labelCount++;
        const _this = this;
        condition.exitRule = function(listener){
            listener.exitExpression?.(this);
            _this.writeCode('not', 'gotoif', `@${label}`);
            _this.addCommentAfter('then');
        };
        ctx.statement()[0].exitRule = function(listener){
            listener.exitStatement?.(this);
            if(hasElse){
                _this.writeCode('goto', `@${elseLabel}`);
                _this.addCommentAfter('else');
            }
            _this.addLabelAfter(label);
        };
        if(hasElse){
            ctx.statement()[1].exitRule = function(listener){
                listener.exitStatement?.(this);
                _this.addLabelAfter(elseLabel!);
            };
        }
    }
    exitIfStatement(ctx: IfStatementContext): void{
        this.addCommentBefore('end if');
    }
    enterWhileStatement(ctx: WhileStatementContext): void{
        const condition = ctx.expression();
        const startLabel = `L_WHILE_${this.labelCount}`;
        const endLabel = `L_ENDWHILE_${this.labelCount}`;
        this.labelCount++;
        this.addLabelAfter(startLabel);
        this.addCommentAfter(`while (line ${ctx.start.line})`);
        const _this = this;
        condition.exitRule = function(listener){
            listener.exitExpression?.(this);
            _this.writeCode('not', 'gotoif', `@${endLabel}`);
            _this.addCommentAfter('do');
        };
        ctx.statement().exitRule = function(listener){
            listener.exitStatement?.(this);
            _this.writeCode('goto', `@${startLabel}`);
            _this.addLabelAfter(endLabel);
        };
    }
    exitWhileStatement(ctx: WhileStatementContext): void{
        this.addCommentBefore('end while');
    }
    enterConstant(ctx: ConstantContext): void{
        const value = this.parseConstant(ctx.CONSTANT());
        this.writeCode('push', value);
    }
    enterAssign(ctx: AssignContext): void{
        this.addCommentAfter('assign');
        const name = ctx.start.text!;
        const object = this.getObjectByName(name);
        assert(!object.isConst, `${name} is constant.`);
    }
    exitAssign(ctx: AssignContext): void{
        this.writeCode('set');
    }
    enterCompoundAssign(ctx: CompoundAssignContext): void{
        this.addCommentAfter(`compound assign (${ctx.COMPOUND_ASSIGN_OPERATOR().toString()})`);
        const name = ctx.start.text!;
        const object = this.getObjectByName(name);
        assert(!object.isConst, `${name} is constant.`);
        const _this = this;
        ctx.address().exitRule = function(listener){
            listener.exitAddress?.(this);
            _this.writeCode('copy', 'ref');
        };
    }
    exitCompoundAssign(ctx: CompoundAssignContext): void{
        let operator = ctx.COMPOUND_ASSIGN_OPERATOR().toString();
        operator = operator.substring(0, operator.length - 1);
        this.writeCode(operatorNameMap[operator], 'set');
    }
    private address(ctx: VarAddressContext | ArrayAddressContext): void{
        const isArray = ctx instanceof ArrayAddressContext;
        const varName = ctx.IDENTIFIER().toString();
        const variable = this.getObjectByName(varName);
        if(variable.isConstExpr){
            this.writeCode('push', this.objects[varName].value!);
        }
        else{
            this.writeCode('push', variable.address!);
        }
    }
    enterVarAddress(ctx: VarAddressContext): void{
        this.address(ctx);
    }
    enterArrayAddress(ctx: ArrayAddressContext): void{
        this.address(ctx);
    }
    exitArrayAddress(ctx: ArrayAddressContext): void{
        this.writeCode('add');
    }
    exitRef(ctx: RefContext): void{
        const varName = ctx.start.text!;
        const variable = this.getObjectByName(varName);
        if(!variable.isConstExpr){
            this.writeCode('ref');
        }
    }
    enterExpression(ctx: ExpressionContext): void{
        const numOperators = ctx.LOGICAL_ADD_OPERATOR().length;
        for(let i = 0; i < numOperators; i++){
            const operator = ctx.LOGICAL_ADD_OPERATOR(i).toString();
            const termCtx = ctx.logicalTerm(i + 1);
            const _this = this;
            termCtx.exitRule = function(listener){
                listener.exitLogicalTerm?.(this);
                _this.writeCode(operatorNameMap[operator]);
            };
        }
    }
    enterLogicalTerm(ctx: LogicalTermContext): void{
        const numOperators = ctx.LOGICAL_MUL_OPERATOR().length;
        for(let i = 0; i < numOperators; i++){
            const operator = ctx.LOGICAL_MUL_OPERATOR(i).toString();
            const factorCtx = ctx.logicalFactor(i + 1);
            const _this = this;
            factorCtx.exitRule = function(listener){
                listener.exitLogicalFactor?.(this);
                _this.writeCode(operatorNameMap[operator]);
            };
        }
    }
    enterLogicalFactor(ctx: LogicalFactorContext): void{
        const _this = this;
        if(ctx.LOGICAL_NOT_OPERATOR() !== undefined){ // NOTの場合
            if(ctx.factor() !== undefined){
                ctx.factor()!.exitRule = function(listener){
                    listener.exitFactor?.(this);
                    _this.writeCode('not');
                }
            }
            else{
                ctx.expression()!.exitRule = function(listener){
                    listener.exitExpression?.(this);
                    _this.writeCode('not');
                }
            }
        }
        else{
            const hasOperator = ctx.REL_OPERATOR() !== undefined;
            if(hasOperator){
                const operator = ctx.REL_OPERATOR()?.toString();
                ctx.simpleExpression()[1].exitRule = function(listener){
                    listener.exitSimpleExpression?.(this);
                    _this.writeCode(operatorNameMap[operator!]);
                };
            }
        }
    }
    enterSimpleExpression(ctx: SimpleExpressionContext): void{
        const numOperators = ctx.ADD_OPERATOR().length;
        for(let i = 0; i < numOperators; i++){
            const operator = ctx.ADD_OPERATOR(i).toString();
            const termCtx = ctx.term(i + 1);
            const _this = this;
            termCtx.exitRule = function(listener){
                listener.exitTerm?.(this);
                _this.writeCode(operatorNameMap[operator]);
            };
        }
    }
    enterTerm(ctx: TermContext): void{
        const numOperators = ctx.MUL_OPERATOR().length;
        for(let i = 0; i < numOperators; i++){
            const operator = ctx.MUL_OPERATOR(i).toString();
            const factorCtx = ctx.factor(i + 1);
            const _this = this;
            factorCtx.exitRule = function(listener){
                listener.exitFactor?.(this);
                _this.writeCode(operatorNameMap[operator]);
            };
        }
    }
    enterFuncDef(ctx: FuncDefContext): void{
        const funcName = ctx.IDENTIFIER()[0].toString();
        const argNames = ctx.IDENTIFIER().slice(1).map(node => node.toString());
        const hasReturnValue = ctx.expression() !== undefined;
        assert(
            !(funcName in this.functions) && !(funcName in builtInFuncs) && !(funcName in builtInProcs),
            `${funcName} is already defined.`,
        );
        this.scope = funcName;
        const func = new Func(funcName, argNames.length, hasReturnValue);
        func.argAddress = this.dataSize + 1;
        this.functions[funcName] = func;
        this.addCommentAfter(`definition of function ${funcName} start`);
        for(const argName of argNames){
            const varNameInScope = this.getVarNameInScope(argName)
            const variable = new ScratchObject(varNameInScope, this.dataSize + 1);
            this.objects[varNameInScope] = variable;
            this.dataSize++;
        }
        this.writeCode('goto', `@L_FUNC_SKIP_${funcName}`);
        this.addLabelAfter(`L_FUNC_${funcName}`);
    }
    exitFuncDef(ctx: FuncDefContext): void{
        const funcName = ctx.IDENTIFIER()[0].toString();
        const func = this.functions[funcName];
        if(func.hasReturnValue){
            this.writeCode('swap');
        }
        this.writeCode('ret');
        this.addLabelAfter(`L_FUNC_SKIP_${funcName}`);
        this.writeCode('nop');
        this.addCommentBefore(`definition of function ${funcName} end`);
        this.scope = '';
    }
    enterFuncCall(ctx: FuncCallContext): void{
        const funcName = ctx.IDENTIFIER().toString();
        const numGivenArgs = ctx.expression().length;
        const builtInFunc = builtInFuncs.find(f => f.name == funcName);
        if(builtInFunc !== undefined){
            assert(
                numGivenArgs == builtInFunc.numArgs, 
                `${builtInFunc.name} takes ${builtInFunc.numArgs} arguments, but given ${numGivenArgs} arguments.`,
            );
            this.addCommentAfter(`call build-in func ${funcName}`);
        }
        else{
            // 自作関数の場合
            assert(funcName in this.functions, `${funcName} does not exist.`);
            const func = this.functions[funcName];
            assert(func.hasReturnValue, `${funcName} has no return value.`);
            assert(
                numGivenArgs == func.numArgs, 
                `${func.name} takes ${func.numArgs} arguments, but given ${numGivenArgs} arguments.`,
            );
            this.addCommentAfter(`call user-defined func ${funcName}`);
        }
    }
    exitFuncCall(ctx: FuncCallContext): void{
        const funcName = ctx.IDENTIFIER().toString();
        const builtInFunc = builtInFuncs.find(f => f.name == funcName);
        if(builtInFunc !== undefined){
            this.writeCode(funcName);
        }
        else{
            // 自作関数の場合
            const func = this.functions[funcName];
            this.callUserDefinedFunc(func);
        }
    }
    enterProcCall(ctx: ProcCallContext): void{
        const procName = ctx.IDENTIFIER().toString();
        const numGivenArgs = ctx.expression().length;
        const builtInProc = builtInProcs.find(f => f.name == procName);
        if(builtInProc !== undefined){
            assert(
                numGivenArgs == builtInProc.numArgs, 
                `${builtInProc.name} takes ${builtInProc.numArgs} arguments, but given ${numGivenArgs} arguments.`,
            );
            this.addCommentAfter(`call build-in proc ${procName}`);
        }
        else{
            // 自作関数の場合
            assert(procName in this.functions, `${procName} does not exist.`);
            const proc = this.functions[procName];
            assert(
                numGivenArgs == proc.numArgs, 
                `${proc.name} takes ${proc.numArgs} arguments, but given ${numGivenArgs} arguments.`,
            );
            this.addCommentAfter(`call user-defined proc ${procName}`);
        }
    }
    exitProcCall(ctx: ProcCallContext): void{
        // const procName = ctx.IDENTIFIER().toString();
        // this.writeCode(procName);
        const procName = ctx.IDENTIFIER().toString();
        const builtInProc = builtInProcs.find(f => f.name == procName);
        if(builtInProc !== undefined){
            this.writeCode(procName);
        }
        else{
            // 自作関数の場合
            const func = this.functions[procName];
            this.callUserDefinedFunc(func);
        }
    }
    compile(): string{
        const numLines = this.outputLines.length;
        let lines: string[] = [];
        for(let i = 0; i < numLines; i++){
            let line = '';
            if(i in this.labels){
                line += this.labels[i] + ':';
            }
            line += this.outputLines[i];
            lines.push(line);
        }
        const maxLength = lines.reduce((length, str) => Math.max(length, str.length), 0);
        for(let i = 0; i < numLines; i++){
            if(i in this.comments){
                lines[i] += ' '.repeat(maxLength - lines[i].length) + '  # ' + this.comments[i];
            }
        }
        return lines.join('\n');
    }
}

export function compile(inputCode: string){
    const originalConsoleError = console.error;
    console.error = e => {
        throw new Error(e.toString());
    };
    try{
        const inputStream = CharStreams.fromString(inputCode);
        const lexer = new JScratchLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new JScratchParser(tokenStream);
        const tree = parser.entry();
        const listener: JScratchListener = new Listener();
        ParseTreeWalker.DEFAULT.walk(listener, tree);
        const intermediateCode = (<Listener>listener).compile();
        const assemblyCode = new Encoder().encode(intermediateCode);
        return {'assemblyCode': assemblyCode, 'intermediateCode': intermediateCode};
    }
    catch(e){
        throw e;
    }
    finally{
        console.error = originalConsoleError;
    }
}