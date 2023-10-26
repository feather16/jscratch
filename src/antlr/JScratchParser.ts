// Generated from JScratch.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JScratchListener } from "./JScratchListener";

export class JScratchParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly ADD_OPERATOR = 18;
	public static readonly MUL_OPERATOR = 19;
	public static readonly LOGICAL_ADD_OPERATOR = 20;
	public static readonly LOGICAL_MUL_OPERATOR = 21;
	public static readonly LOGICAL_NOT_OPERATOR = 22;
	public static readonly COMPOUND_ASSIGN_OPERATOR = 23;
	public static readonly REL_OPERATOR = 24;
	public static readonly CONSTANT = 25;
	public static readonly IDENTIFIER = 26;
	public static readonly NUMBER_CONSTANT = 27;
	public static readonly STRING_CONSTANT = 28;
	public static readonly ARRAY_SIZE = 29;
	public static readonly WS = 30;
	public static readonly MultiLineComment = 31;
	public static readonly SingleLineComment = 32;
	public static readonly RULE_entry = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_varDecl = 2;
	public static readonly RULE_constDecl = 3;
	public static readonly RULE_constExprDecl = 4;
	public static readonly RULE_varInit = 5;
	public static readonly RULE_arrayInit = 6;
	public static readonly RULE_constVarInit = 7;
	public static readonly RULE_constArrayInit = 8;
	public static readonly RULE_constExprVarInit = 9;
	public static readonly RULE_assign = 10;
	public static readonly RULE_compoundAssign = 11;
	public static readonly RULE_address = 12;
	public static readonly RULE_varAddress = 13;
	public static readonly RULE_arrayAddress = 14;
	public static readonly RULE_ref = 15;
	public static readonly RULE_procCall = 16;
	public static readonly RULE_ifStatement = 17;
	public static readonly RULE_whileStatement = 18;
	public static readonly RULE_funcDef = 19;
	public static readonly RULE_expression = 20;
	public static readonly RULE_logicalTerm = 21;
	public static readonly RULE_logicalFactor = 22;
	public static readonly RULE_simpleExpression = 23;
	public static readonly RULE_term = 24;
	public static readonly RULE_factor = 25;
	public static readonly RULE_funcCall = 26;
	public static readonly RULE_constant = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"entry", "statement", "varDecl", "constDecl", "constExprDecl", "varInit", 
		"arrayInit", "constVarInit", "constArrayInit", "constExprVarInit", "assign", 
		"compoundAssign", "address", "varAddress", "arrayAddress", "ref", "procCall", 
		"ifStatement", "whileStatement", "funcDef", "expression", "logicalTerm", 
		"logicalFactor", "simpleExpression", "term", "factor", "funcCall", "constant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'{'", "'}'", "'var'", "','", "'const'", "'constexpr'", 
		"'='", "'['", "']'", "'('", "')'", "'if'", "'else'", "'while'", "'function'", 
		"'return'", undefined, undefined, "'|'", "'&'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "ADD_OPERATOR", "MUL_OPERATOR", 
		"LOGICAL_ADD_OPERATOR", "LOGICAL_MUL_OPERATOR", "LOGICAL_NOT_OPERATOR", 
		"COMPOUND_ASSIGN_OPERATOR", "REL_OPERATOR", "CONSTANT", "IDENTIFIER", 
		"NUMBER_CONSTANT", "STRING_CONSTANT", "ARRAY_SIZE", "WS", "MultiLineComment", 
		"SingleLineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JScratchParser._LITERAL_NAMES, JScratchParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JScratchParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JScratch.g4"; }

	// @Override
	public get ruleNames(): string[] { return JScratchParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JScratchParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JScratchParser._ATN, this);
	}
	// @RuleVersion(0)
	public entry(): EntryContext {
		let _localctx: EntryContext = new EntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JScratchParser.RULE_entry);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JScratchParser.RULE_statement);
		let _la: number;
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JScratchParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(JScratchParser.T__3);
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDecl(): ConstDeclContext {
		let _localctx: ConstDeclContext = new ConstDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JScratchParser.RULE_constDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(JScratchParser.T__5);
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
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
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constExprDecl(): ConstExprDeclContext {
		let _localctx: ConstExprDeclContext = new ConstExprDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JScratchParser.RULE_constExprDecl);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varInit(): VarInitContext {
		let _localctx: VarInitContext = new VarInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JScratchParser.RULE_varInit);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInit(): ArrayInitContext {
		let _localctx: ArrayInitContext = new ArrayInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JScratchParser.RULE_arrayInit);
		let _la: number;
		try {
			let _alt: number;
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
						throw new NoViableAltException(this);
					}
					this.state = 151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constVarInit(): ConstVarInitContext {
		let _localctx: ConstVarInitContext = new ConstVarInitContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constArrayInit(): ConstArrayInitContext {
		let _localctx: ConstArrayInitContext = new ConstArrayInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JScratchParser.RULE_constArrayInit);
		let _la: number;
		try {
			let _alt: number;
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
					throw new NoViableAltException(this);
				}
				this.state = 177;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constExprVarInit(): ConstExprVarInitContext {
		let _localctx: ConstExprVarInitContext = new ConstExprVarInitContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundAssign(): CompoundAssignContext {
		let _localctx: CompoundAssignContext = new CompoundAssignContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public address(): AddressContext {
		let _localctx: AddressContext = new AddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JScratchParser.RULE_address);
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varAddress(): VarAddressContext {
		let _localctx: VarAddressContext = new VarAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JScratchParser.RULE_varAddress);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(JScratchParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAddress(): ArrayAddressContext {
		let _localctx: ArrayAddressContext = new ArrayAddressContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ref(): RefContext {
		let _localctx: RefContext = new RefContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JScratchParser.RULE_ref);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.address();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procCall(): ProcCallContext {
		let _localctx: ProcCallContext = new ProcCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JScratchParser.RULE_procCall);
		let _la: number;
		try {
			let _alt: number;
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
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
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
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcDef(): FuncDefContext {
		let _localctx: FuncDefContext = new FuncDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JScratchParser.RULE_funcDef);
		let _la: number;
		try {
			let _alt: number;
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
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JScratchParser.RULE_expression);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalTerm(): LogicalTermContext {
		let _localctx: LogicalTermContext = new LogicalTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JScratchParser.RULE_logicalTerm);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalFactor(): LogicalFactorContext {
		let _localctx: LogicalFactorContext = new LogicalFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JScratchParser.RULE_logicalFactor);
		let _la: number;
		try {
			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleExpression(): SimpleExpressionContext {
		let _localctx: SimpleExpressionContext = new SimpleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JScratchParser.RULE_simpleExpression);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JScratchParser.RULE_term);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JScratchParser.RULE_factor);
		try {
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcCall(): FuncCallContext {
		let _localctx: FuncCallContext = new FuncCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JScratchParser.RULE_funcCall);
		let _la: number;
		try {
			let _alt: number;
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
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JScratchParser.RULE_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(JScratchParser.CONSTANT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u015F\x04\x02" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JScratchParser.__ATN) {
			JScratchParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JScratchParser._serializedATN));
		}

		return JScratchParser.__ATN;
	}

}

export class EntryContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JScratchParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_entry; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterEntry) {
			listener.enterEntry(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitEntry) {
			listener.exitEntry(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public constDecl(): ConstDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclContext);
	}
	public constExprDecl(): ConstExprDeclContext | undefined {
		return this.tryGetRuleContext(0, ConstExprDeclContext);
	}
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	public compoundAssign(): CompoundAssignContext | undefined {
		return this.tryGetRuleContext(0, CompoundAssignContext);
	}
	public procCall(): ProcCallContext | undefined {
		return this.tryGetRuleContext(0, ProcCallContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public funcDef(): FuncDefContext | undefined {
		return this.tryGetRuleContext(0, FuncDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_statement; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public varInit(): VarInitContext[];
	public varInit(i: number): VarInitContext;
	public varInit(i?: number): VarInitContext | VarInitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarInitContext);
		} else {
			return this.getRuleContext(i, VarInitContext);
		}
	}
	public arrayInit(): ArrayInitContext[];
	public arrayInit(i: number): ArrayInitContext;
	public arrayInit(i?: number): ArrayInitContext | ArrayInitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayInitContext);
		} else {
			return this.getRuleContext(i, ArrayInitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
}


export class ConstDeclContext extends ParserRuleContext {
	public constVarInit(): ConstVarInitContext[];
	public constVarInit(i: number): ConstVarInitContext;
	public constVarInit(i?: number): ConstVarInitContext | ConstVarInitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstVarInitContext);
		} else {
			return this.getRuleContext(i, ConstVarInitContext);
		}
	}
	public constArrayInit(): ConstArrayInitContext[];
	public constArrayInit(i: number): ConstArrayInitContext;
	public constArrayInit(i?: number): ConstArrayInitContext | ConstArrayInitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstArrayInitContext);
		} else {
			return this.getRuleContext(i, ConstArrayInitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_constDecl; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterConstDecl) {
			listener.enterConstDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitConstDecl) {
			listener.exitConstDecl(this);
		}
	}
}


export class ConstExprDeclContext extends ParserRuleContext {
	public constExprVarInit(): ConstExprVarInitContext[];
	public constExprVarInit(i: number): ConstExprVarInitContext;
	public constExprVarInit(i?: number): ConstExprVarInitContext | ConstExprVarInitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstExprVarInitContext);
		} else {
			return this.getRuleContext(i, ConstExprVarInitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_constExprDecl; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterConstExprDecl) {
			listener.enterConstExprDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitConstExprDecl) {
			listener.exitConstExprDecl(this);
		}
	}
}


export class VarInitContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_varInit; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterVarInit) {
			listener.enterVarInit(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitVarInit) {
			listener.exitVarInit(this);
		}
	}
}


export class ArrayInitContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	public CONSTANT(): TerminalNode | undefined { return this.tryGetToken(JScratchParser.CONSTANT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_arrayInit; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterArrayInit) {
			listener.enterArrayInit(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitArrayInit) {
			listener.exitArrayInit(this);
		}
	}
}


export class ConstVarInitContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_constVarInit; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterConstVarInit) {
			listener.enterConstVarInit(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitConstVarInit) {
			listener.exitConstVarInit(this);
		}
	}
}


export class ConstArrayInitContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CONSTANT(): TerminalNode | undefined { return this.tryGetToken(JScratchParser.CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_constArrayInit; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterConstArrayInit) {
			listener.enterConstArrayInit(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitConstArrayInit) {
			listener.exitConstArrayInit(this);
		}
	}
}


export class ConstExprVarInitContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	public CONSTANT(): TerminalNode { return this.getToken(JScratchParser.CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_constExprVarInit; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterConstExprVarInit) {
			listener.enterConstExprVarInit(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitConstExprVarInit) {
			listener.exitConstExprVarInit(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public address(): AddressContext {
		return this.getRuleContext(0, AddressContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_assign; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
}


export class CompoundAssignContext extends ParserRuleContext {
	public address(): AddressContext {
		return this.getRuleContext(0, AddressContext);
	}
	public COMPOUND_ASSIGN_OPERATOR(): TerminalNode { return this.getToken(JScratchParser.COMPOUND_ASSIGN_OPERATOR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_compoundAssign; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterCompoundAssign) {
			listener.enterCompoundAssign(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitCompoundAssign) {
			listener.exitCompoundAssign(this);
		}
	}
}


export class AddressContext extends ParserRuleContext {
	public varAddress(): VarAddressContext | undefined {
		return this.tryGetRuleContext(0, VarAddressContext);
	}
	public arrayAddress(): ArrayAddressContext | undefined {
		return this.tryGetRuleContext(0, ArrayAddressContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_address; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterAddress) {
			listener.enterAddress(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitAddress) {
			listener.exitAddress(this);
		}
	}
}


export class VarAddressContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_varAddress; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterVarAddress) {
			listener.enterVarAddress(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitVarAddress) {
			listener.exitVarAddress(this);
		}
	}
}


export class ArrayAddressContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_arrayAddress; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterArrayAddress) {
			listener.enterArrayAddress(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitArrayAddress) {
			listener.exitArrayAddress(this);
		}
	}
}


export class RefContext extends ParserRuleContext {
	public address(): AddressContext {
		return this.getRuleContext(0, AddressContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_ref; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterRef) {
			listener.enterRef(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitRef) {
			listener.exitRef(this);
		}
	}
}


export class ProcCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_procCall; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterProcCall) {
			listener.enterProcCall(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitProcCall) {
			listener.exitProcCall(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}


export class FuncDefContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JScratchParser.IDENTIFIER);
		} else {
			return this.getToken(JScratchParser.IDENTIFIER, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_funcDef; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterFuncDef) {
			listener.enterFuncDef(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitFuncDef) {
			listener.exitFuncDef(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public logicalTerm(): LogicalTermContext[];
	public logicalTerm(i: number): LogicalTermContext;
	public logicalTerm(i?: number): LogicalTermContext | LogicalTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalTermContext);
		} else {
			return this.getRuleContext(i, LogicalTermContext);
		}
	}
	public LOGICAL_ADD_OPERATOR(): TerminalNode[];
	public LOGICAL_ADD_OPERATOR(i: number): TerminalNode;
	public LOGICAL_ADD_OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JScratchParser.LOGICAL_ADD_OPERATOR);
		} else {
			return this.getToken(JScratchParser.LOGICAL_ADD_OPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_expression; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class LogicalTermContext extends ParserRuleContext {
	public logicalFactor(): LogicalFactorContext[];
	public logicalFactor(i: number): LogicalFactorContext;
	public logicalFactor(i?: number): LogicalFactorContext | LogicalFactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalFactorContext);
		} else {
			return this.getRuleContext(i, LogicalFactorContext);
		}
	}
	public LOGICAL_MUL_OPERATOR(): TerminalNode[];
	public LOGICAL_MUL_OPERATOR(i: number): TerminalNode;
	public LOGICAL_MUL_OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JScratchParser.LOGICAL_MUL_OPERATOR);
		} else {
			return this.getToken(JScratchParser.LOGICAL_MUL_OPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_logicalTerm; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterLogicalTerm) {
			listener.enterLogicalTerm(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitLogicalTerm) {
			listener.exitLogicalTerm(this);
		}
	}
}


export class LogicalFactorContext extends ParserRuleContext {
	public simpleExpression(): SimpleExpressionContext[];
	public simpleExpression(i: number): SimpleExpressionContext;
	public simpleExpression(i?: number): SimpleExpressionContext | SimpleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleExpressionContext);
		} else {
			return this.getRuleContext(i, SimpleExpressionContext);
		}
	}
	public REL_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(JScratchParser.REL_OPERATOR, 0); }
	public LOGICAL_NOT_OPERATOR(): TerminalNode | undefined { return this.tryGetToken(JScratchParser.LOGICAL_NOT_OPERATOR, 0); }
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_logicalFactor; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterLogicalFactor) {
			listener.enterLogicalFactor(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitLogicalFactor) {
			listener.exitLogicalFactor(this);
		}
	}
}


export class SimpleExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public ADD_OPERATOR(): TerminalNode[];
	public ADD_OPERATOR(i: number): TerminalNode;
	public ADD_OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JScratchParser.ADD_OPERATOR);
		} else {
			return this.getToken(JScratchParser.ADD_OPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_simpleExpression; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterSimpleExpression) {
			listener.enterSimpleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitSimpleExpression) {
			listener.exitSimpleExpression(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public MUL_OPERATOR(): TerminalNode[];
	public MUL_OPERATOR(i: number): TerminalNode;
	public MUL_OPERATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JScratchParser.MUL_OPERATOR);
		} else {
			return this.getToken(JScratchParser.MUL_OPERATOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_term; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public ref(): RefContext | undefined {
		return this.tryGetRuleContext(0, RefContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public funcCall(): FuncCallContext | undefined {
		return this.tryGetRuleContext(0, FuncCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_factor; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class FuncCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(JScratchParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_funcCall; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterFuncCall) {
			listener.enterFuncCall(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitFuncCall) {
			listener.exitFuncCall(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public CONSTANT(): TerminalNode { return this.getToken(JScratchParser.CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JScratchParser.RULE_constant; }
	// @Override
	public enterRule(listener: JScratchListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: JScratchListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


