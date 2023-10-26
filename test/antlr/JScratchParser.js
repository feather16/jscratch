"use strict";
// Generated from JScratch.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantContext = exports.FuncCallContext = exports.FactorContext = exports.TermContext = exports.SimpleExpressionContext = exports.LogicalFactorContext = exports.LogicalTermContext = exports.ExpressionContext = exports.FuncDefContext = exports.WhileStatementContext = exports.IfStatementContext = exports.ProcCallContext = exports.RefContext = exports.ArrayAddressContext = exports.VarAddressContext = exports.AddressContext = exports.CompoundAssignContext = exports.AssignContext = exports.ConstExprVarInitContext = exports.ConstArrayInitContext = exports.ConstVarInitContext = exports.ArrayInitContext = exports.VarInitContext = exports.ConstExprDeclContext = exports.ConstDeclContext = exports.VarDeclContext = exports.StatementContext = exports.EntryContext = exports.JScratchParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class JScratchParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return JScratchParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "JScratch.g4"; }
    // @Override
    get ruleNames() { return JScratchParser.ruleNames; }
    // @Override
    get serializedATN() { return JScratchParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(JScratchParser._ATN, this);
    }
    // @RuleVersion(0)
    entry() {
        let _localctx = new EntryContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JScratchParser.RULE_entry);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 56;
                            this.statement();
                        }
                    }
                    this.state = 59;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JScratchParser.T__1) | (1 << JScratchParser.T__3) | (1 << JScratchParser.T__5) | (1 << JScratchParser.T__6) | (1 << JScratchParser.T__12) | (1 << JScratchParser.T__14) | (1 << JScratchParser.T__15) | (1 << JScratchParser.IDENTIFIER))) !== 0));
                this.state = 61;
                this.match(JScratchParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JScratchParser.RULE_statement);
        let _la;
        try {
            this.state = 92;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 63;
                        this.varDecl();
                        this.state = 64;
                        this.match(JScratchParser.T__0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 66;
                        this.constDecl();
                        this.state = 67;
                        this.match(JScratchParser.T__0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 69;
                        this.constExprDecl();
                        this.state = 70;
                        this.match(JScratchParser.T__0);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 72;
                        this.assign();
                        this.state = 73;
                        this.match(JScratchParser.T__0);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 75;
                        this.compoundAssign();
                        this.state = 76;
                        this.match(JScratchParser.T__0);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 78;
                        this.procCall();
                        this.state = 79;
                        this.match(JScratchParser.T__0);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 81;
                        this.match(JScratchParser.T__1);
                        this.state = 85;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JScratchParser.T__1) | (1 << JScratchParser.T__3) | (1 << JScratchParser.T__5) | (1 << JScratchParser.T__6) | (1 << JScratchParser.T__12) | (1 << JScratchParser.T__14) | (1 << JScratchParser.T__15) | (1 << JScratchParser.IDENTIFIER))) !== 0)) {
                            {
                                {
                                    this.state = 82;
                                    this.statement();
                                }
                            }
                            this.state = 87;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 88;
                        this.match(JScratchParser.T__2);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 89;
                        this.ifStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 90;
                        this.whileStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 91;
                        this.funcDef();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varDecl() {
        let _localctx = new VarDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JScratchParser.RULE_varDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this.match(JScratchParser.T__3);
                this.state = 97;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 95;
                            this.varInit();
                        }
                        break;
                    case 2:
                        {
                            this.state = 96;
                            this.arrayInit();
                        }
                        break;
                }
                this.state = 106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JScratchParser.T__4) {
                    {
                        {
                            this.state = 99;
                            this.match(JScratchParser.T__4);
                            this.state = 102;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 100;
                                        this.varInit();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 101;
                                        this.arrayInit();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 108;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constDecl() {
        let _localctx = new ConstDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JScratchParser.RULE_constDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this.match(JScratchParser.T__5);
                this.state = 112;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 110;
                            this.constVarInit();
                        }
                        break;
                    case 2:
                        {
                            this.state = 111;
                            this.constArrayInit();
                        }
                        break;
                }
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JScratchParser.T__4) {
                    {
                        {
                            this.state = 114;
                            this.match(JScratchParser.T__4);
                            this.state = 117;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 115;
                                        this.constVarInit();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 116;
                                        this.constArrayInit();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 123;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constExprDecl() {
        let _localctx = new ConstExprDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JScratchParser.RULE_constExprDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                this.match(JScratchParser.T__6);
                this.state = 125;
                this.constExprVarInit();
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JScratchParser.T__4) {
                    {
                        {
                            this.state = 126;
                            this.match(JScratchParser.T__4);
                            this.state = 127;
                            this.constExprVarInit();
                        }
                    }
                    this.state = 132;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varInit() {
        let _localctx = new VarInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JScratchParser.RULE_varInit);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JScratchParser.T__7) {
                    {
                        this.state = 134;
                        this.match(JScratchParser.T__7);
                        this.state = 135;
                        this.expression();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayInit() {
        let _localctx = new ArrayInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JScratchParser.RULE_arrayInit);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 138;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 139;
                this.match(JScratchParser.T__8);
                this.state = 141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JScratchParser.CONSTANT) {
                    {
                        this.state = 140;
                        this.match(JScratchParser.CONSTANT);
                    }
                }
                this.state = 143;
                this.match(JScratchParser.T__9);
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JScratchParser.T__7) {
                    {
                        this.state = 144;
                        this.match(JScratchParser.T__7);
                        this.state = 145;
                        this.match(JScratchParser.T__8);
                        this.state = 146;
                        this.expression();
                        this.state = 149;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 147;
                                            this.match(JScratchParser.T__4);
                                            this.state = 148;
                                            this.expression();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 151;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 154;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JScratchParser.T__4) {
                            {
                                this.state = 153;
                                this.match(JScratchParser.T__4);
                            }
                        }
                        this.state = 156;
                        this.match(JScratchParser.T__9);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constVarInit() {
        let _localctx = new ConstVarInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JScratchParser.RULE_constVarInit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 160;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 161;
                this.match(JScratchParser.T__7);
                this.state = 162;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constArrayInit() {
        let _localctx = new ConstArrayInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JScratchParser.RULE_constArrayInit);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 165;
                this.match(JScratchParser.T__8);
                this.state = 167;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JScratchParser.CONSTANT) {
                    {
                        this.state = 166;
                        this.match(JScratchParser.CONSTANT);
                    }
                }
                this.state = 169;
                this.match(JScratchParser.T__9);
                this.state = 170;
                this.match(JScratchParser.T__7);
                this.state = 171;
                this.match(JScratchParser.T__8);
                this.state = 172;
                this.expression();
                this.state = 175;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 173;
                                    this.match(JScratchParser.T__4);
                                    this.state = 174;
                                    this.expression();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 177;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JScratchParser.T__4) {
                    {
                        this.state = 179;
                        this.match(JScratchParser.T__4);
                    }
                }
                this.state = 182;
                this.match(JScratchParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constExprVarInit() {
        let _localctx = new ConstExprVarInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JScratchParser.RULE_constExprVarInit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 184;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 185;
                this.match(JScratchParser.T__7);
                this.state = 186;
                this.match(JScratchParser.CONSTANT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assign() {
        let _localctx = new AssignContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JScratchParser.RULE_assign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 188;
                this.address();
                this.state = 189;
                this.match(JScratchParser.T__7);
                this.state = 190;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compoundAssign() {
        let _localctx = new CompoundAssignContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, JScratchParser.RULE_compoundAssign);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.address();
                this.state = 193;
                this.match(JScratchParser.COMPOUND_ASSIGN_OPERATOR);
                this.state = 194;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    address() {
        let _localctx = new AddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, JScratchParser.RULE_address);
        try {
            this.state = 198;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 196;
                        this.varAddress();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 197;
                        this.arrayAddress();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varAddress() {
        let _localctx = new VarAddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, JScratchParser.RULE_varAddress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.match(JScratchParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayAddress() {
        let _localctx = new ArrayAddressContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, JScratchParser.RULE_arrayAddress);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 203;
                this.match(JScratchParser.T__8);
                this.state = 204;
                this.expression();
                this.state = 205;
                this.match(JScratchParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ref() {
        let _localctx = new RefContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, JScratchParser.RULE_ref);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this.address();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    procCall() {
        let _localctx = new ProcCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, JScratchParser.RULE_procCall);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 209;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 210;
                this.match(JScratchParser.T__10);
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JScratchParser.T__10) | (1 << JScratchParser.LOGICAL_NOT_OPERATOR) | (1 << JScratchParser.CONSTANT) | (1 << JScratchParser.IDENTIFIER))) !== 0)) {
                    {
                        this.state = 211;
                        this.expression();
                        this.state = 216;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 212;
                                        this.match(JScratchParser.T__4);
                                        this.state = 213;
                                        this.expression();
                                    }
                                }
                            }
                            this.state = 218;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                        }
                        this.state = 220;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JScratchParser.T__4) {
                            {
                                this.state = 219;
                                this.match(JScratchParser.T__4);
                            }
                        }
                    }
                }
                this.state = 224;
                this.match(JScratchParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifStatement() {
        let _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, JScratchParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(JScratchParser.T__12);
                this.state = 227;
                this.match(JScratchParser.T__10);
                this.state = 228;
                this.expression();
                this.state = 229;
                this.match(JScratchParser.T__11);
                this.state = 230;
                this.statement();
                this.state = 233;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 231;
                            this.match(JScratchParser.T__13);
                            this.state = 232;
                            this.statement();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whileStatement() {
        let _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, JScratchParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 235;
                this.match(JScratchParser.T__14);
                this.state = 236;
                this.match(JScratchParser.T__10);
                this.state = 237;
                this.expression();
                this.state = 238;
                this.match(JScratchParser.T__11);
                this.state = 239;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    funcDef() {
        let _localctx = new FuncDefContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, JScratchParser.RULE_funcDef);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                this.match(JScratchParser.T__15);
                this.state = 242;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 243;
                this.match(JScratchParser.T__10);
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JScratchParser.IDENTIFIER) {
                    {
                        this.state = 244;
                        this.match(JScratchParser.IDENTIFIER);
                        this.state = 249;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 245;
                                        this.match(JScratchParser.T__4);
                                        this.state = 246;
                                        this.match(JScratchParser.IDENTIFIER);
                                    }
                                }
                            }
                            this.state = 251;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                        }
                        this.state = 253;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JScratchParser.T__4) {
                            {
                                this.state = 252;
                                this.match(JScratchParser.T__4);
                            }
                        }
                    }
                }
                this.state = 257;
                this.match(JScratchParser.T__11);
                this.state = 258;
                this.match(JScratchParser.T__1);
                this.state = 262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JScratchParser.T__1) | (1 << JScratchParser.T__3) | (1 << JScratchParser.T__5) | (1 << JScratchParser.T__6) | (1 << JScratchParser.T__12) | (1 << JScratchParser.T__14) | (1 << JScratchParser.T__15) | (1 << JScratchParser.IDENTIFIER))) !== 0)) {
                    {
                        {
                            this.state = 259;
                            this.statement();
                        }
                    }
                    this.state = 264;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 270;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JScratchParser.T__16) {
                    {
                        this.state = 265;
                        this.match(JScratchParser.T__16);
                        this.state = 267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JScratchParser.T__10) | (1 << JScratchParser.LOGICAL_NOT_OPERATOR) | (1 << JScratchParser.CONSTANT) | (1 << JScratchParser.IDENTIFIER))) !== 0)) {
                            {
                                this.state = 266;
                                this.expression();
                            }
                        }
                        this.state = 269;
                        this.match(JScratchParser.T__0);
                    }
                }
                this.state = 272;
                this.match(JScratchParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression() {
        let _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JScratchParser.RULE_expression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this.logicalTerm();
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JScratchParser.LOGICAL_ADD_OPERATOR) {
                    {
                        {
                            this.state = 275;
                            this.match(JScratchParser.LOGICAL_ADD_OPERATOR);
                            this.state = 276;
                            this.logicalTerm();
                        }
                    }
                    this.state = 281;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    logicalTerm() {
        let _localctx = new LogicalTermContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, JScratchParser.RULE_logicalTerm);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this.logicalFactor();
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JScratchParser.LOGICAL_MUL_OPERATOR) {
                    {
                        {
                            this.state = 283;
                            this.match(JScratchParser.LOGICAL_MUL_OPERATOR);
                            this.state = 284;
                            this.logicalFactor();
                        }
                    }
                    this.state = 289;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    logicalFactor() {
        let _localctx = new LogicalFactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, JScratchParser.RULE_logicalFactor);
        let _la;
        try {
            this.state = 302;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 290;
                        this.simpleExpression();
                        this.state = 293;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JScratchParser.REL_OPERATOR) {
                            {
                                this.state = 291;
                                this.match(JScratchParser.REL_OPERATOR);
                                this.state = 292;
                                this.simpleExpression();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 295;
                        this.match(JScratchParser.LOGICAL_NOT_OPERATOR);
                        this.state = 296;
                        this.factor();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 297;
                        this.match(JScratchParser.LOGICAL_NOT_OPERATOR);
                        this.state = 298;
                        this.match(JScratchParser.T__10);
                        this.state = 299;
                        this.expression();
                        this.state = 300;
                        this.match(JScratchParser.T__11);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleExpression() {
        let _localctx = new SimpleExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, JScratchParser.RULE_simpleExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 304;
                this.term();
                this.state = 309;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JScratchParser.ADD_OPERATOR) {
                    {
                        {
                            this.state = 305;
                            this.match(JScratchParser.ADD_OPERATOR);
                            this.state = 306;
                            this.term();
                        }
                    }
                    this.state = 311;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term() {
        let _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, JScratchParser.RULE_term);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                this.factor();
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JScratchParser.MUL_OPERATOR) {
                    {
                        {
                            this.state = 313;
                            this.match(JScratchParser.MUL_OPERATOR);
                            this.state = 314;
                            this.factor();
                        }
                    }
                    this.state = 319;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    factor() {
        let _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, JScratchParser.RULE_factor);
        try {
            this.state = 327;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 320;
                        this.constant();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 321;
                        this.ref();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 322;
                        this.match(JScratchParser.T__10);
                        this.state = 323;
                        this.expression();
                        this.state = 324;
                        this.match(JScratchParser.T__11);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 326;
                        this.funcCall();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    funcCall() {
        let _localctx = new FuncCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, JScratchParser.RULE_funcCall);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this.match(JScratchParser.IDENTIFIER);
                this.state = 330;
                this.match(JScratchParser.T__10);
                this.state = 342;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JScratchParser.T__10) | (1 << JScratchParser.LOGICAL_NOT_OPERATOR) | (1 << JScratchParser.CONSTANT) | (1 << JScratchParser.IDENTIFIER))) !== 0)) {
                    {
                        this.state = 331;
                        this.expression();
                        this.state = 336;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 332;
                                        this.match(JScratchParser.T__4);
                                        this.state = 333;
                                        this.expression();
                                    }
                                }
                            }
                            this.state = 338;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                        }
                        this.state = 340;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JScratchParser.T__4) {
                            {
                                this.state = 339;
                                this.match(JScratchParser.T__4);
                            }
                        }
                    }
                }
                this.state = 344;
                this.match(JScratchParser.T__11);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constant() {
        let _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, JScratchParser.RULE_constant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 346;
                this.match(JScratchParser.CONSTANT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!JScratchParser.__ATN) {
            JScratchParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JScratchParser._serializedATN));
        }
        return JScratchParser.__ATN;
    }
}
exports.JScratchParser = JScratchParser;
JScratchParser.T__0 = 1;
JScratchParser.T__1 = 2;
JScratchParser.T__2 = 3;
JScratchParser.T__3 = 4;
JScratchParser.T__4 = 5;
JScratchParser.T__5 = 6;
JScratchParser.T__6 = 7;
JScratchParser.T__7 = 8;
JScratchParser.T__8 = 9;
JScratchParser.T__9 = 10;
JScratchParser.T__10 = 11;
JScratchParser.T__11 = 12;
JScratchParser.T__12 = 13;
JScratchParser.T__13 = 14;
JScratchParser.T__14 = 15;
JScratchParser.T__15 = 16;
JScratchParser.T__16 = 17;
JScratchParser.ADD_OPERATOR = 18;
JScratchParser.MUL_OPERATOR = 19;
JScratchParser.LOGICAL_ADD_OPERATOR = 20;
JScratchParser.LOGICAL_MUL_OPERATOR = 21;
JScratchParser.LOGICAL_NOT_OPERATOR = 22;
JScratchParser.COMPOUND_ASSIGN_OPERATOR = 23;
JScratchParser.REL_OPERATOR = 24;
JScratchParser.CONSTANT = 25;
JScratchParser.IDENTIFIER = 26;
JScratchParser.NUMBER_CONSTANT = 27;
JScratchParser.STRING_CONSTANT = 28;
JScratchParser.ARRAY_SIZE = 29;
JScratchParser.WS = 30;
JScratchParser.MultiLineComment = 31;
JScratchParser.SingleLineComment = 32;
JScratchParser.RULE_entry = 0;
JScratchParser.RULE_statement = 1;
JScratchParser.RULE_varDecl = 2;
JScratchParser.RULE_constDecl = 3;
JScratchParser.RULE_constExprDecl = 4;
JScratchParser.RULE_varInit = 5;
JScratchParser.RULE_arrayInit = 6;
JScratchParser.RULE_constVarInit = 7;
JScratchParser.RULE_constArrayInit = 8;
JScratchParser.RULE_constExprVarInit = 9;
JScratchParser.RULE_assign = 10;
JScratchParser.RULE_compoundAssign = 11;
JScratchParser.RULE_address = 12;
JScratchParser.RULE_varAddress = 13;
JScratchParser.RULE_arrayAddress = 14;
JScratchParser.RULE_ref = 15;
JScratchParser.RULE_procCall = 16;
JScratchParser.RULE_ifStatement = 17;
JScratchParser.RULE_whileStatement = 18;
JScratchParser.RULE_funcDef = 19;
JScratchParser.RULE_expression = 20;
JScratchParser.RULE_logicalTerm = 21;
JScratchParser.RULE_logicalFactor = 22;
JScratchParser.RULE_simpleExpression = 23;
JScratchParser.RULE_term = 24;
JScratchParser.RULE_factor = 25;
JScratchParser.RULE_funcCall = 26;
JScratchParser.RULE_constant = 27;
// tslint:disable:no-trailing-whitespace
JScratchParser.ruleNames = [
    "entry", "statement", "varDecl", "constDecl", "constExprDecl", "varInit",
    "arrayInit", "constVarInit", "constArrayInit", "constExprVarInit", "assign",
    "compoundAssign", "address", "varAddress", "arrayAddress", "ref", "procCall",
    "ifStatement", "whileStatement", "funcDef", "expression", "logicalTerm",
    "logicalFactor", "simpleExpression", "term", "factor", "funcCall", "constant",
];
JScratchParser._LITERAL_NAMES = [
    undefined, "';'", "'{'", "'}'", "'var'", "','", "'const'", "'constexpr'",
    "'='", "'['", "']'", "'('", "')'", "'if'", "'else'", "'while'", "'function'",
    "'return'", undefined, undefined, "'|'", "'&'", "'!'",
];
JScratchParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "ADD_OPERATOR", "MUL_OPERATOR",
    "LOGICAL_ADD_OPERATOR", "LOGICAL_MUL_OPERATOR", "LOGICAL_NOT_OPERATOR",
    "COMPOUND_ASSIGN_OPERATOR", "REL_OPERATOR", "CONSTANT", "IDENTIFIER",
    "NUMBER_CONSTANT", "STRING_CONSTANT", "ARRAY_SIZE", "WS", "MultiLineComment",
    "SingleLineComment",
];
JScratchParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JScratchParser._LITERAL_NAMES, JScratchParser._SYMBOLIC_NAMES, []);
JScratchParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u015F\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x03\x02\x06\x02<\n\x02\r\x02\x0E\x02=\x03\x02\x03\x02\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x07\x03V\n\x03\f\x03\x0E\x03Y\v\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x05\x03_\n\x03\x03\x04\x03\x04\x03\x04\x05\x04d\n\x04\x03\x04\x03" +
    "\x04\x03\x04\x05\x04i\n\x04\x07\x04k\n\x04\f\x04\x0E\x04n\v\x04\x03\x05" +
    "\x03\x05\x03\x05\x05\x05s\n\x05\x03\x05\x03\x05\x03\x05\x05\x05x\n\x05" +
    "\x07\x05z\n\x05\f\x05\x0E\x05}\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
    "\x06\x83\n\x06\f\x06\x0E\x06\x86\v\x06\x03\x07\x03\x07\x03\x07\x05\x07" +
    "\x8B\n\x07\x03\b\x03\b\x03\b\x05\b\x90\n\b\x03\b\x03\b\x03\b\x03\b\x03" +
    "\b\x03\b\x06\b\x98\n\b\r\b\x0E\b\x99\x03\b\x05\b\x9D\n\b\x03\b\x03\b\x05" +
    "\b\xA1\n\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xAA\n\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x06\n\xB2\n\n\r\n\x0E\n\xB3\x03\n\x05" +
    "\n\xB7\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f" +
    "\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\xC9\n\x0E\x03\x0F\x03" +
    "\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x07\x12\xD9\n\x12\f\x12\x0E\x12\xDC\v\x12" +
    "\x03\x12\x05\x12\xDF\n\x12\x05\x12\xE1\n\x12\x03\x12\x03\x12\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xEC\n\x13\x03\x14" +
    "\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x07\x15\xFA\n\x15\f\x15\x0E\x15\xFD\v\x15\x03\x15\x05" +
    "\x15\u0100\n\x15\x05\x15\u0102\n\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0107" +
    "\n\x15\f\x15\x0E\x15\u010A\v\x15\x03\x15\x03\x15\x05\x15\u010E\n\x15\x03" +
    "\x15\x05\x15\u0111\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x07\x16" +
    "\u0118\n\x16\f\x16\x0E\x16\u011B\v\x16\x03\x17\x03\x17\x03\x17\x07\x17" +
    "\u0120\n\x17\f\x17\x0E\x17\u0123\v\x17\x03\x18\x03\x18\x03\x18\x05\x18" +
    "\u0128\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
    "\x18\u0131\n\x18\x03\x19\x03\x19\x03\x19\x07\x19\u0136\n\x19\f\x19\x0E" +
    "\x19\u0139\v\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u013E\n\x1A\f\x1A\x0E" +
    "\x1A\u0141\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
    "\x05\x1B\u014A\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0151" +
    "\n\x1C\f\x1C\x0E\x1C\u0154\v\x1C\x03\x1C\x05\x1C\u0157\n\x1C\x05\x1C\u0159" +
    "\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x02\x02\x02\x1E\x02\x02" +
    "\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
    "\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
    ".\x020\x022\x024\x026\x028\x02\x02\x02\x02\u0174\x02;\x03\x02\x02\x02" +
    "\x04^\x03\x02\x02\x02\x06`\x03\x02\x02\x02\bo\x03\x02\x02\x02\n~\x03\x02" +
    "\x02\x02\f\x87\x03\x02\x02\x02\x0E\x8C\x03\x02\x02\x02\x10\xA2\x03\x02" +
    "\x02\x02\x12\xA6\x03\x02\x02\x02\x14\xBA\x03\x02\x02\x02\x16\xBE\x03\x02" +
    "\x02\x02\x18\xC2\x03\x02\x02\x02\x1A\xC8\x03\x02\x02\x02\x1C\xCA\x03\x02" +
    "\x02\x02\x1E\xCC\x03\x02\x02\x02 \xD1\x03\x02\x02\x02\"\xD3\x03\x02\x02" +
    "\x02$\xE4\x03\x02\x02\x02&\xED\x03\x02\x02\x02(\xF3\x03\x02\x02\x02*\u0114" +
    "\x03\x02\x02\x02,\u011C\x03\x02\x02\x02.\u0130\x03\x02\x02\x020\u0132" +
    "\x03\x02\x02\x022\u013A\x03\x02\x02\x024\u0149\x03\x02\x02\x026\u014B" +
    "\x03\x02\x02\x028\u015C\x03\x02\x02\x02:<\x05\x04\x03\x02;:\x03\x02\x02" +
    "\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02" +
    "\x02?@\x07\x02\x02\x03@\x03\x03\x02\x02\x02AB\x05\x06\x04\x02BC\x07\x03" +
    "\x02\x02C_\x03\x02\x02\x02DE\x05\b\x05\x02EF\x07\x03\x02\x02F_\x03\x02" +
    "\x02\x02GH\x05\n\x06\x02HI\x07\x03\x02\x02I_\x03\x02\x02\x02JK\x05\x16" +
    "\f\x02KL\x07\x03\x02\x02L_\x03\x02\x02\x02MN\x05\x18\r\x02NO\x07\x03\x02" +
    "\x02O_\x03\x02\x02\x02PQ\x05\"\x12\x02QR\x07\x03\x02\x02R_\x03\x02\x02" +
    "\x02SW\x07\x04\x02\x02TV\x05\x04\x03\x02UT\x03\x02\x02\x02VY\x03\x02\x02" +
    "\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02" +
    "\x02Z_\x07\x05\x02\x02[_\x05$\x13\x02\\_\x05&\x14\x02]_\x05(\x15\x02^" +
    "A\x03\x02\x02\x02^D\x03\x02\x02\x02^G\x03\x02\x02\x02^J\x03\x02\x02\x02" +
    "^M\x03\x02\x02\x02^P\x03\x02\x02\x02^S\x03\x02\x02\x02^[\x03\x02\x02\x02" +
    "^\\\x03\x02\x02\x02^]\x03\x02\x02\x02_\x05\x03\x02\x02\x02`c\x07\x06\x02" +
    "\x02ad\x05\f\x07\x02bd\x05\x0E\b\x02ca\x03\x02\x02\x02cb\x03\x02\x02\x02" +
    "dl\x03\x02\x02\x02eh\x07\x07\x02\x02fi\x05\f\x07\x02gi\x05\x0E\b\x02h" +
    "f\x03\x02\x02\x02hg\x03\x02\x02\x02ik\x03\x02\x02\x02je\x03\x02\x02\x02" +
    "kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\x07\x03\x02\x02" +
    "\x02nl\x03\x02\x02\x02or\x07\b\x02\x02ps\x05\x10\t\x02qs\x05\x12\n\x02" +
    "rp\x03\x02\x02\x02rq\x03\x02\x02\x02s{\x03\x02\x02\x02tw\x07\x07\x02\x02" +
    "ux\x05\x10\t\x02vx\x05\x12\n\x02wu\x03\x02\x02\x02wv\x03\x02\x02\x02x" +
    "z\x03\x02\x02\x02yt\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02" +
    "{|\x03\x02\x02\x02|\t\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07\t\x02" +
    "\x02\x7F\x84\x05\x14\v\x02\x80\x81\x07\x07\x02\x02\x81\x83\x05\x14\v\x02" +
    "\x82\x80\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02" +
    "\x84\x85\x03\x02\x02\x02\x85\v\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02" +
    "\x87\x8A\x07\x1C\x02\x02\x88\x89\x07\n\x02\x02\x89\x8B\x05*\x16\x02\x8A" +
    "\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\r\x03\x02\x02\x02\x8C" +
    "\x8D\x07\x1C\x02\x02\x8D\x8F\x07\v\x02\x02\x8E\x90\x07\x1B\x02\x02\x8F" +
    "\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
    "\xA0\x07\f\x02\x02\x92\x93\x07\n\x02\x02\x93\x94\x07\v\x02\x02\x94\x97" +
    "\x05*\x16\x02\x95\x96\x07\x07\x02\x02\x96\x98\x05*\x16\x02\x97\x95\x03" +
    "\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03" +
    "\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x9D\x07\x07\x02\x02\x9C\x9B\x03" +
    "\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x07" +
    "\f\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x92\x03\x02\x02\x02\xA0\xA1\x03" +
    "\x02\x02\x02\xA1\x0F\x03\x02\x02\x02\xA2\xA3\x07\x1C\x02\x02\xA3\xA4\x07" +
    "\n\x02\x02\xA4\xA5\x05*\x16\x02\xA5\x11\x03\x02\x02\x02\xA6\xA7\x07\x1C" +
    "\x02\x02\xA7\xA9\x07\v\x02\x02\xA8\xAA\x07\x1B\x02\x02\xA9\xA8\x03\x02" +
    "\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x07\f" +
    "\x02\x02\xAC\xAD\x07\n\x02\x02\xAD\xAE\x07\v\x02\x02\xAE\xB1\x05*\x16" +
    "\x02\xAF\xB0\x07\x07\x02\x02\xB0\xB2\x05*\x16\x02\xB1\xAF\x03\x02\x02" +
    "\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
    "\x02\xB4\xB6\x03\x02\x02\x02\xB5\xB7\x07\x07\x02\x02\xB6\xB5\x03\x02\x02" +
    "\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x07\f\x02" +
    "\x02\xB9\x13\x03\x02\x02\x02\xBA\xBB\x07\x1C\x02\x02\xBB\xBC\x07\n\x02" +
    "\x02\xBC\xBD\x07\x1B\x02\x02\xBD\x15\x03\x02\x02\x02\xBE\xBF\x05\x1A\x0E" +
    "\x02\xBF\xC0\x07\n\x02\x02\xC0\xC1\x05*\x16\x02\xC1\x17\x03\x02\x02\x02" +
    "\xC2\xC3\x05\x1A\x0E\x02\xC3\xC4\x07\x19\x02\x02\xC4\xC5\x05*\x16\x02" +
    "\xC5\x19\x03\x02\x02\x02\xC6\xC9\x05\x1C\x0F\x02\xC7\xC9\x05\x1E\x10\x02" +
    "\xC8\xC6\x03\x02\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9\x1B\x03\x02\x02\x02" +
    "\xCA\xCB\x07\x1C\x02\x02\xCB\x1D\x03\x02\x02\x02\xCC\xCD\x07\x1C\x02\x02" +
    "\xCD\xCE\x07\v\x02\x02\xCE\xCF\x05*\x16\x02\xCF\xD0\x07\f\x02\x02\xD0" +
    "\x1F\x03\x02\x02\x02\xD1\xD2\x05\x1A\x0E\x02\xD2!\x03\x02\x02\x02\xD3" +
    "\xD4\x07\x1C\x02\x02\xD4\xE0\x07\r\x02\x02\xD5\xDA\x05*\x16\x02\xD6\xD7" +
    "\x07\x07\x02\x02\xD7\xD9\x05*\x16\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDC" +
    "\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDE" +
    "\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDF\x07\x07\x02\x02\xDE\xDD" +
    "\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xD5" +
    "\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3" +
    "\x07\x0E\x02\x02\xE3#\x03\x02\x02\x02\xE4\xE5\x07\x0F\x02\x02\xE5\xE6" +
    "\x07\r\x02\x02\xE6\xE7\x05*\x16\x02\xE7\xE8\x07\x0E\x02\x02\xE8\xEB\x05" +
    "\x04\x03\x02\xE9\xEA\x07\x10\x02\x02\xEA\xEC\x05\x04\x03\x02\xEB\xE9\x03" +
    "\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC%\x03\x02\x02\x02\xED\xEE\x07" +
    "\x11\x02\x02\xEE\xEF\x07\r\x02\x02\xEF\xF0\x05*\x16\x02\xF0\xF1\x07\x0E" +
    "\x02\x02\xF1\xF2\x05\x04\x03\x02\xF2\'\x03\x02\x02\x02\xF3\xF4\x07\x12" +
    "\x02\x02\xF4\xF5\x07\x1C\x02\x02\xF5\u0101\x07\r\x02\x02\xF6\xFB\x07\x1C" +
    "\x02\x02\xF7\xF8\x07\x07\x02\x02\xF8\xFA\x07\x1C\x02\x02\xF9\xF7\x03\x02" +
    "\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02" +
    "\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0100\x07" +
    "\x07\x02\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102" +
    "\x03\x02\x02\x02\u0101\xF6\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02" +
    "\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x07\x0E\x02\x02\u0104\u0108\x07" +
    "\x04\x02\x02\u0105\u0107\x05\x04\x03\x02\u0106\u0105\x03\x02\x02\x02\u0107" +
    "\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02" +
    "\x02\x02\u0109\u0110\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B" +
    "\u010D\x07\x13\x02\x02\u010C\u010E\x05*\x16\x02\u010D\u010C\x03\x02\x02" +
    "\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111" +
    "\x07\x03\x02\x02\u0110\u010B\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02" +
    "\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x07\x05\x02\x02\u0113)\x03\x02" +
    "\x02\x02\u0114\u0119\x05,\x17\x02\u0115\u0116\x07\x16\x02\x02\u0116\u0118" +
    "\x05,\x17\x02\u0117\u0115\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02" +
    "\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A+\x03\x02" +
    "\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u0121\x05.\x18\x02\u011D\u011E" +
    "\x07\x17\x02\x02\u011E\u0120\x05.\x18\x02\u011F\u011D\x03\x02\x02\x02" +
    "\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03" +
    "\x02\x02\x02\u0122-\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124" +
    "\u0127\x050\x19\x02\u0125\u0126\x07\x1A\x02\x02\u0126\u0128\x050\x19\x02" +
    "\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0131\x03" +
    "\x02\x02\x02\u0129\u012A\x07\x18\x02\x02\u012A\u0131\x054\x1B\x02\u012B" +
    "\u012C\x07\x18\x02\x02\u012C\u012D\x07\r\x02\x02\u012D\u012E\x05*\x16" +
    "\x02\u012E\u012F\x07\x0E\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u0124" +
    "\x03\x02\x02\x02\u0130\u0129\x03\x02\x02\x02\u0130\u012B\x03\x02\x02\x02" +
    "\u0131/\x03\x02\x02\x02\u0132\u0137\x052\x1A\x02\u0133\u0134\x07\x14\x02" +
    "\x02\u0134\u0136\x052\x1A\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0139" +
    "\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02" +
    "\u01381\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013F\x054\x1B" +
    "\x02\u013B\u013C\x07\x15\x02\x02\u013C\u013E\x054\x1B\x02\u013D\u013B" +
    "\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02" +
    "\u013F\u0140\x03\x02\x02\x02\u01403\x03\x02\x02\x02\u0141\u013F\x03\x02" +
    "\x02\x02\u0142\u014A\x058\x1D\x02\u0143\u014A\x05 \x11\x02\u0144\u0145" +
    "\x07\r\x02\x02\u0145\u0146\x05*\x16\x02\u0146\u0147\x07\x0E\x02\x02\u0147" +
    "\u014A\x03\x02\x02\x02\u0148\u014A\x056\x1C\x02\u0149\u0142\x03\x02\x02" +
    "\x02\u0149\u0143\x03\x02\x02\x02\u0149\u0144\x03\x02\x02\x02\u0149\u0148" +
    "\x03\x02\x02\x02\u014A5\x03\x02\x02\x02\u014B\u014C\x07\x1C\x02\x02\u014C" +
    "\u0158\x07\r\x02\x02\u014D\u0152\x05*\x16\x02\u014E\u014F\x07\x07\x02" +
    "\x02\u014F\u0151\x05*\x16\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0154" +
    "\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
    "\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\u0157\x07" +
    "\x07\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157" +
    "\u0159\x03\x02\x02\x02\u0158\u014D\x03\x02\x02\x02\u0158\u0159\x03\x02" +
    "\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x07\x0E\x02\x02\u015B" +
    "7\x03\x02\x02\x02\u015C\u015D\x07\x1B\x02\x02\u015D9\x03\x02\x02\x02)" +
    "=W^chlrw{\x84\x8A\x8F\x99\x9C\xA0\xA9\xB3\xB6\xC8\xDA\xDE\xE0\xEB\xFB" +
    "\xFF\u0101\u0108\u010D\u0110\u0119\u0121\u0127\u0130\u0137\u013F\u0149" +
    "\u0152\u0156\u0158";
class EntryContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(JScratchParser.EOF, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_entry; }
    // @Override
    enterRule(listener) {
        if (listener.enterEntry) {
            listener.enterEntry(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEntry) {
            listener.exitEntry(this);
        }
    }
}
exports.EntryContext = EntryContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    varDecl() {
        return this.tryGetRuleContext(0, VarDeclContext);
    }
    constDecl() {
        return this.tryGetRuleContext(0, ConstDeclContext);
    }
    constExprDecl() {
        return this.tryGetRuleContext(0, ConstExprDeclContext);
    }
    assign() {
        return this.tryGetRuleContext(0, AssignContext);
    }
    compoundAssign() {
        return this.tryGetRuleContext(0, CompoundAssignContext);
    }
    procCall() {
        return this.tryGetRuleContext(0, ProcCallContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    ifStatement() {
        return this.tryGetRuleContext(0, IfStatementContext);
    }
    whileStatement() {
        return this.tryGetRuleContext(0, WhileStatementContext);
    }
    funcDef() {
        return this.tryGetRuleContext(0, FuncDefContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
}
exports.StatementContext = StatementContext;
class VarDeclContext extends ParserRuleContext_1.ParserRuleContext {
    varInit(i) {
        if (i === undefined) {
            return this.getRuleContexts(VarInitContext);
        }
        else {
            return this.getRuleContext(i, VarInitContext);
        }
    }
    arrayInit(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayInitContext);
        }
        else {
            return this.getRuleContext(i, ArrayInitContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_varDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterVarDecl) {
            listener.enterVarDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarDecl) {
            listener.exitVarDecl(this);
        }
    }
}
exports.VarDeclContext = VarDeclContext;
class ConstDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constVarInit(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstVarInitContext);
        }
        else {
            return this.getRuleContext(i, ConstVarInitContext);
        }
    }
    constArrayInit(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstArrayInitContext);
        }
        else {
            return this.getRuleContext(i, ConstArrayInitContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_constDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstDecl) {
            listener.enterConstDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstDecl) {
            listener.exitConstDecl(this);
        }
    }
}
exports.ConstDeclContext = ConstDeclContext;
class ConstExprDeclContext extends ParserRuleContext_1.ParserRuleContext {
    constExprVarInit(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstExprVarInitContext);
        }
        else {
            return this.getRuleContext(i, ConstExprVarInitContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_constExprDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstExprDecl) {
            listener.enterConstExprDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstExprDecl) {
            listener.exitConstExprDecl(this);
        }
    }
}
exports.ConstExprDeclContext = ConstExprDeclContext;
class VarInitContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_varInit; }
    // @Override
    enterRule(listener) {
        if (listener.enterVarInit) {
            listener.enterVarInit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarInit) {
            listener.exitVarInit(this);
        }
    }
}
exports.VarInitContext = VarInitContext;
class ArrayInitContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    CONSTANT() { return this.tryGetToken(JScratchParser.CONSTANT, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_arrayInit; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayInit) {
            listener.enterArrayInit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayInit) {
            listener.exitArrayInit(this);
        }
    }
}
exports.ArrayInitContext = ArrayInitContext;
class ConstVarInitContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_constVarInit; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstVarInit) {
            listener.enterConstVarInit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstVarInit) {
            listener.exitConstVarInit(this);
        }
    }
}
exports.ConstVarInitContext = ConstVarInitContext;
class ConstArrayInitContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    CONSTANT() { return this.tryGetToken(JScratchParser.CONSTANT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_constArrayInit; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstArrayInit) {
            listener.enterConstArrayInit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstArrayInit) {
            listener.exitConstArrayInit(this);
        }
    }
}
exports.ConstArrayInitContext = ConstArrayInitContext;
class ConstExprVarInitContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    CONSTANT() { return this.getToken(JScratchParser.CONSTANT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_constExprVarInit; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstExprVarInit) {
            listener.enterConstExprVarInit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstExprVarInit) {
            listener.exitConstExprVarInit(this);
        }
    }
}
exports.ConstExprVarInitContext = ConstExprVarInitContext;
class AssignContext extends ParserRuleContext_1.ParserRuleContext {
    address() {
        return this.getRuleContext(0, AddressContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_assign; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssign) {
            listener.enterAssign(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssign) {
            listener.exitAssign(this);
        }
    }
}
exports.AssignContext = AssignContext;
class CompoundAssignContext extends ParserRuleContext_1.ParserRuleContext {
    address() {
        return this.getRuleContext(0, AddressContext);
    }
    COMPOUND_ASSIGN_OPERATOR() { return this.getToken(JScratchParser.COMPOUND_ASSIGN_OPERATOR, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_compoundAssign; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompoundAssign) {
            listener.enterCompoundAssign(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompoundAssign) {
            listener.exitCompoundAssign(this);
        }
    }
}
exports.CompoundAssignContext = CompoundAssignContext;
class AddressContext extends ParserRuleContext_1.ParserRuleContext {
    varAddress() {
        return this.tryGetRuleContext(0, VarAddressContext);
    }
    arrayAddress() {
        return this.tryGetRuleContext(0, ArrayAddressContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_address; }
    // @Override
    enterRule(listener) {
        if (listener.enterAddress) {
            listener.enterAddress(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAddress) {
            listener.exitAddress(this);
        }
    }
}
exports.AddressContext = AddressContext;
class VarAddressContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_varAddress; }
    // @Override
    enterRule(listener) {
        if (listener.enterVarAddress) {
            listener.enterVarAddress(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarAddress) {
            listener.exitVarAddress(this);
        }
    }
}
exports.VarAddressContext = VarAddressContext;
class ArrayAddressContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_arrayAddress; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayAddress) {
            listener.enterArrayAddress(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayAddress) {
            listener.exitArrayAddress(this);
        }
    }
}
exports.ArrayAddressContext = ArrayAddressContext;
class RefContext extends ParserRuleContext_1.ParserRuleContext {
    address() {
        return this.getRuleContext(0, AddressContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_ref; }
    // @Override
    enterRule(listener) {
        if (listener.enterRef) {
            listener.enterRef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRef) {
            listener.exitRef(this);
        }
    }
}
exports.RefContext = RefContext;
class ProcCallContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_procCall; }
    // @Override
    enterRule(listener) {
        if (listener.enterProcCall) {
            listener.enterProcCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProcCall) {
            listener.exitProcCall(this);
        }
    }
}
exports.ProcCallContext = ProcCallContext;
class IfStatementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_ifStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    }
}
exports.IfStatementContext = IfStatementContext;
class WhileStatementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_whileStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }
}
exports.WhileStatementContext = WhileStatementContext;
class FuncDefContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER(i) {
        if (i === undefined) {
            return this.getTokens(JScratchParser.IDENTIFIER);
        }
        else {
            return this.getToken(JScratchParser.IDENTIFIER, i);
        }
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_funcDef; }
    // @Override
    enterRule(listener) {
        if (listener.enterFuncDef) {
            listener.enterFuncDef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFuncDef) {
            listener.exitFuncDef(this);
        }
    }
}
exports.FuncDefContext = FuncDefContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    logicalTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicalTermContext);
        }
        else {
            return this.getRuleContext(i, LogicalTermContext);
        }
    }
    LOGICAL_ADD_OPERATOR(i) {
        if (i === undefined) {
            return this.getTokens(JScratchParser.LOGICAL_ADD_OPERATOR);
        }
        else {
            return this.getToken(JScratchParser.LOGICAL_ADD_OPERATOR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class LogicalTermContext extends ParserRuleContext_1.ParserRuleContext {
    logicalFactor(i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicalFactorContext);
        }
        else {
            return this.getRuleContext(i, LogicalFactorContext);
        }
    }
    LOGICAL_MUL_OPERATOR(i) {
        if (i === undefined) {
            return this.getTokens(JScratchParser.LOGICAL_MUL_OPERATOR);
        }
        else {
            return this.getToken(JScratchParser.LOGICAL_MUL_OPERATOR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_logicalTerm; }
    // @Override
    enterRule(listener) {
        if (listener.enterLogicalTerm) {
            listener.enterLogicalTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLogicalTerm) {
            listener.exitLogicalTerm(this);
        }
    }
}
exports.LogicalTermContext = LogicalTermContext;
class LogicalFactorContext extends ParserRuleContext_1.ParserRuleContext {
    simpleExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SimpleExpressionContext);
        }
    }
    REL_OPERATOR() { return this.tryGetToken(JScratchParser.REL_OPERATOR, 0); }
    LOGICAL_NOT_OPERATOR() { return this.tryGetToken(JScratchParser.LOGICAL_NOT_OPERATOR, 0); }
    factor() {
        return this.tryGetRuleContext(0, FactorContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_logicalFactor; }
    // @Override
    enterRule(listener) {
        if (listener.enterLogicalFactor) {
            listener.enterLogicalFactor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLogicalFactor) {
            listener.exitLogicalFactor(this);
        }
    }
}
exports.LogicalFactorContext = LogicalFactorContext;
class SimpleExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    term(i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    }
    ADD_OPERATOR(i) {
        if (i === undefined) {
            return this.getTokens(JScratchParser.ADD_OPERATOR);
        }
        else {
            return this.getToken(JScratchParser.ADD_OPERATOR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_simpleExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleExpression) {
            listener.enterSimpleExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleExpression) {
            listener.exitSimpleExpression(this);
        }
    }
}
exports.SimpleExpressionContext = SimpleExpressionContext;
class TermContext extends ParserRuleContext_1.ParserRuleContext {
    factor(i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }
        else {
            return this.getRuleContext(i, FactorContext);
        }
    }
    MUL_OPERATOR(i) {
        if (i === undefined) {
            return this.getTokens(JScratchParser.MUL_OPERATOR);
        }
        else {
            return this.getToken(JScratchParser.MUL_OPERATOR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterTerm) {
            listener.enterTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTerm) {
            listener.exitTerm(this);
        }
    }
}
exports.TermContext = TermContext;
class FactorContext extends ParserRuleContext_1.ParserRuleContext {
    constant() {
        return this.tryGetRuleContext(0, ConstantContext);
    }
    ref() {
        return this.tryGetRuleContext(0, RefContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    funcCall() {
        return this.tryGetRuleContext(0, FuncCallContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_factor; }
    // @Override
    enterRule(listener) {
        if (listener.enterFactor) {
            listener.enterFactor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFactor) {
            listener.exitFactor(this);
        }
    }
}
exports.FactorContext = FactorContext;
class FuncCallContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.getToken(JScratchParser.IDENTIFIER, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_funcCall; }
    // @Override
    enterRule(listener) {
        if (listener.enterFuncCall) {
            listener.enterFuncCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFuncCall) {
            listener.exitFuncCall(this);
        }
    }
}
exports.FuncCallContext = FuncCallContext;
class ConstantContext extends ParserRuleContext_1.ParserRuleContext {
    CONSTANT() { return this.getToken(JScratchParser.CONSTANT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JScratchParser.RULE_constant; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    }
}
exports.ConstantContext = ConstantContext;
