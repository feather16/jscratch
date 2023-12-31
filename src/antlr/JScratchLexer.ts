// Generated from JScratch.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class JScratchLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"ADD_OPERATOR", "MUL_OPERATOR", "LOGICAL_ADD_OPERATOR", "LOGICAL_MUL_OPERATOR", 
		"LOGICAL_NOT_OPERATOR", "COMPOUND_ASSIGN_OPERATOR", "REL_OPERATOR", "CONSTANT", 
		"IDENTIFIER", "NUMBER_CONSTANT", "STRING_CONSTANT", "ARRAY_SIZE", "CHARACTER", 
		"WS", "MultiLineComment", "SingleLineComment",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JScratchLexer._LITERAL_NAMES, JScratchLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JScratchLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(JScratchLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "JScratch.g4"; }

	// @Override
	public get ruleNames(): string[] { return JScratchLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return JScratchLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return JScratchLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return JScratchLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\"\u0102\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xA2\n" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x05\x19\xAE\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xB3\n\x1A" +
		"\x03\x1B\x03\x1B\x07\x1B\xB7\n\x1B\f\x1B\x0E\x1B\xBA\v\x1B\x03\x1C\x05" +
		"\x1C\xBD\n\x1C\x03\x1C\x06\x1C\xC0\n\x1C\r\x1C\x0E\x1C\xC1\x03\x1C\x03" +
		"\x1C\x06\x1C\xC6\n\x1C\r\x1C\x0E\x1C\xC7\x05\x1C\xCA\n\x1C\x03\x1D\x03" +
		"\x1D\x07\x1D\xCE\n\x1D\f\x1D\x0E\x1D\xD1\v\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x07\x1D\xD6\n\x1D\f\x1D\x0E\x1D\xD9\v\x1D\x03\x1D\x05\x1D\xDC\n\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x06 \xE4\n \r \x0E \xE5\x03" +
		" \x03 \x03!\x03!\x03!\x03!\x07!\xEE\n!\f!\x0E!\xF1\v!\x03!\x03!\x03!\x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03\"\x07\"\xFC\n\"\f\"\x0E\"\xFF\v\"\x03\"\x03" +
		"\"\x03\xEF\x02\x02#\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
		"\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'" +
		"\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C" +
		"7\x02\x1D9\x02\x1E;\x02\x1F=\x02\x02?\x02 A\x02!C\x02\"\x03\x02\v\x04" +
		"\x02--//\x05\x02\'\',,11\x05\x02C\\aac|\x06\x022;C\\aac|\x03\x02//\x03" +
		"\x022;\x07\x02\f\f\x0F\x0F$$))^^\x05\x02\v\f\x0F\x0F\"\"\x05\x02\f\f\x0F" +
		"\x0F\u202A\u202B\x02\u0118\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02" +
		"9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02" +
		"\x02\x02\x02C\x03\x02\x02\x02\x03E\x03\x02\x02\x02\x05G\x03\x02\x02\x02" +
		"\x07I\x03\x02\x02\x02\tK\x03\x02\x02\x02\vO\x03\x02\x02\x02\rQ\x03\x02" +
		"\x02\x02\x0FW\x03\x02\x02\x02\x11a\x03\x02\x02\x02\x13c\x03\x02\x02\x02" +
		"\x15e\x03\x02\x02\x02\x17g\x03\x02\x02\x02\x19i\x03\x02\x02\x02\x1Bk\x03" +
		"\x02\x02\x02\x1Dn\x03\x02\x02\x02\x1Fs\x03\x02\x02\x02!y\x03\x02\x02\x02" +
		"#\x82\x03\x02\x02\x02%\x89\x03\x02\x02\x02\'\x8B\x03\x02\x02\x02)\x8D" +
		"\x03\x02\x02\x02+\x8F\x03\x02\x02\x02-\x91\x03\x02\x02\x02/\xA1\x03\x02" +
		"\x02\x021\xAD\x03\x02\x02\x023\xB2\x03\x02\x02\x025\xB4\x03\x02\x02\x02" +
		"7\xBC\x03\x02\x02\x029\xDB\x03\x02\x02\x02;\xDD\x03\x02\x02\x02=\xE0\x03" +
		"\x02\x02\x02?\xE3\x03\x02\x02\x02A\xE9\x03\x02\x02\x02C\xF7\x03\x02\x02" +
		"\x02EF\x07=\x02\x02F\x04\x03\x02\x02\x02GH\x07}\x02\x02H\x06\x03\x02\x02" +
		"\x02IJ\x07\x7F\x02\x02J\b\x03\x02\x02\x02KL\x07x\x02\x02LM\x07c\x02\x02" +
		"MN\x07t\x02\x02N\n\x03\x02\x02\x02OP\x07.\x02\x02P\f\x03\x02\x02\x02Q" +
		"R\x07e\x02\x02RS\x07q\x02\x02ST\x07p\x02\x02TU\x07u\x02\x02UV\x07v\x02" +
		"\x02V\x0E\x03\x02\x02\x02WX\x07e\x02\x02XY\x07q\x02\x02YZ\x07p\x02\x02" +
		"Z[\x07u\x02\x02[\\\x07v\x02\x02\\]\x07g\x02\x02]^\x07z\x02\x02^_\x07r" +
		"\x02\x02_`\x07t\x02\x02`\x10\x03\x02\x02\x02ab\x07?\x02\x02b\x12\x03\x02" +
		"\x02\x02cd\x07]\x02\x02d\x14\x03\x02\x02\x02ef\x07_\x02\x02f\x16\x03\x02" +
		"\x02\x02gh\x07*\x02\x02h\x18\x03\x02\x02\x02ij\x07+\x02\x02j\x1A\x03\x02" +
		"\x02\x02kl\x07k\x02\x02lm\x07h\x02\x02m\x1C\x03\x02\x02\x02no\x07g\x02" +
		"\x02op\x07n\x02\x02pq\x07u\x02\x02qr\x07g\x02\x02r\x1E\x03\x02\x02\x02" +
		"st\x07y\x02\x02tu\x07j\x02\x02uv\x07k\x02\x02vw\x07n\x02\x02wx\x07g\x02" +
		"\x02x \x03\x02\x02\x02yz\x07h\x02\x02z{\x07w\x02\x02{|\x07p\x02\x02|}" +
		"\x07e\x02\x02}~\x07v\x02\x02~\x7F\x07k\x02\x02\x7F\x80\x07q\x02\x02\x80" +
		"\x81\x07p\x02\x02\x81\"\x03\x02\x02\x02\x82\x83\x07t\x02\x02\x83\x84\x07" +
		"g\x02\x02\x84\x85\x07v\x02\x02\x85\x86\x07w\x02\x02\x86\x87\x07t\x02\x02" +
		"\x87\x88\x07p\x02\x02\x88$\x03\x02\x02\x02\x89\x8A\t\x02\x02\x02\x8A&" +
		"\x03\x02\x02\x02\x8B\x8C\t\x03\x02\x02\x8C(\x03\x02\x02\x02\x8D\x8E\x07" +
		"~\x02\x02\x8E*\x03\x02\x02\x02\x8F\x90\x07(\x02\x02\x90,\x03\x02\x02\x02" +
		"\x91\x92\x07#\x02\x02\x92.\x03\x02\x02\x02\x93\x94\x07-\x02\x02\x94\xA2" +
		"\x07?\x02\x02\x95\x96\x07/\x02\x02\x96\xA2\x07?\x02\x02\x97\x98\x07,\x02" +
		"\x02\x98\xA2\x07?\x02\x02\x99\x9A\x071\x02\x02\x9A\xA2\x07?\x02\x02\x9B" +
		"\x9C\x07\'\x02\x02\x9C\xA2\x07?\x02\x02\x9D\x9E\x07~\x02\x02\x9E\xA2\x07" +
		"?\x02\x02\x9F\xA0\x07(\x02\x02\xA0\xA2\x07?\x02\x02\xA1\x93\x03\x02\x02" +
		"\x02\xA1\x95\x03\x02\x02\x02\xA1\x97\x03\x02\x02\x02\xA1\x99\x03\x02\x02" +
		"\x02\xA1\x9B\x03\x02\x02\x02\xA1\x9D\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA20\x03\x02\x02\x02\xA3\xA4\x07?\x02\x02\xA4\xAE\x07?\x02\x02\xA5" +
		"\xA6\x07#\x02\x02\xA6\xAE\x07?\x02\x02\xA7\xAE\x07@\x02\x02\xA8\xA9\x07" +
		"@\x02\x02\xA9\xAE\x07?\x02\x02\xAA\xAE\x07>\x02\x02\xAB\xAC\x07>\x02\x02" +
		"\xAC\xAE\x07?\x02\x02\xAD\xA3\x03\x02\x02\x02\xAD\xA5\x03\x02\x02\x02" +
		"\xAD\xA7\x03\x02\x02\x02\xAD\xA8\x03\x02\x02\x02\xAD\xAA\x03\x02\x02\x02" +
		"\xAD\xAB\x03\x02\x02\x02\xAE2\x03\x02\x02\x02\xAF\xB3\x057\x1C\x02\xB0" +
		"\xB3\x059\x1D\x02\xB1\xB3\x05;\x1E\x02\xB2\xAF\x03\x02\x02\x02\xB2\xB0" +
		"\x03\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB34\x03\x02\x02\x02\xB4\xB8" +
		"\t\x04\x02\x02\xB5\xB7\t\x05\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xBA\x03" +
		"\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB96\x03" +
		"\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBD\t\x06\x02\x02\xBC\xBB\x03" +
		"\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xC0\t" +
		"\x07\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xBF\x03" +
		"\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC9\x03\x02\x02\x02\xC3\xC5\x07" +
		"0\x02\x02\xC4\xC6\t\x07\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02" +
		"\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCA\x03\x02" +
		"\x02\x02\xC9\xC3\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA8\x03\x02" +
		"\x02\x02\xCB\xCF\x07)\x02\x02\xCC\xCE\x05=\x1F\x02\xCD\xCC\x03\x02\x02" +
		"\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02" +
		"\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xDC\x07)\x02" +
		"\x02\xD3\xD7\x07$\x02\x02\xD4\xD6\x05=\x1F\x02\xD5\xD4\x03\x02\x02\x02" +
		"\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02" +
		"\xD8\xDA\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDC\x07$\x02\x02" +
		"\xDB\xCB\x03\x02\x02\x02\xDB\xD3\x03\x02\x02\x02\xDC:\x03\x02\x02\x02" +
		"\xDD\xDE\x07%\x02\x02\xDE\xDF\x055\x1B\x02\xDF<\x03\x02\x02\x02\xE0\xE1" +
		"\n\b\x02\x02\xE1>\x03\x02\x02\x02\xE2\xE4\t\t\x02\x02\xE3\xE2\x03\x02" +
		"\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02" +
		"\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\b \x02\x02\xE8@\x03\x02\x02\x02" +
		"\xE9\xEA\x071\x02\x02\xEA\xEB\x07,\x02\x02\xEB\xEF\x03\x02\x02\x02\xEC" +
		"\xEE\v\x02\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF" +
		"\xF0\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1" +
		"\xEF\x03\x02\x02\x02\xF2\xF3\x07,\x02\x02\xF3\xF4\x071\x02\x02\xF4\xF5" +
		"\x03\x02\x02\x02\xF5\xF6\b!\x02\x02\xF6B\x03\x02\x02\x02\xF7\xF8\x071" +
		"\x02\x02\xF8\xF9\x071\x02\x02\xF9\xFD\x03\x02\x02\x02\xFA\xFC\n\n\x02" +
		"\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02" +
		"\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02" +
		"\x02\x02\u0100\u0101\b\"\x02\x02\u0101D\x03\x02\x02\x02\x11\x02\xA1\xAD" +
		"\xB2\xB8\xBC\xC1\xC7\xC9\xCF\xD7\xDB\xE5\xEF\xFD\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JScratchLexer.__ATN) {
			JScratchLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JScratchLexer._serializedATN));
		}

		return JScratchLexer.__ATN;
	}

}

