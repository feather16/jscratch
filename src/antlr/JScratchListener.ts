// Generated from JScratch.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { EntryContext } from "./JScratchParser";
import { StatementContext } from "./JScratchParser";
import { VarDeclContext } from "./JScratchParser";
import { ConstDeclContext } from "./JScratchParser";
import { ConstExprDeclContext } from "./JScratchParser";
import { VarInitContext } from "./JScratchParser";
import { ArrayInitContext } from "./JScratchParser";
import { ConstVarInitContext } from "./JScratchParser";
import { ConstArrayInitContext } from "./JScratchParser";
import { ConstExprVarInitContext } from "./JScratchParser";
import { AssignContext } from "./JScratchParser";
import { CompoundAssignContext } from "./JScratchParser";
import { AddressContext } from "./JScratchParser";
import { VarAddressContext } from "./JScratchParser";
import { ArrayAddressContext } from "./JScratchParser";
import { RefContext } from "./JScratchParser";
import { ProcCallContext } from "./JScratchParser";
import { IfStatementContext } from "./JScratchParser";
import { WhileStatementContext } from "./JScratchParser";
import { FuncDefContext } from "./JScratchParser";
import { ExpressionContext } from "./JScratchParser";
import { LogicalTermContext } from "./JScratchParser";
import { LogicalFactorContext } from "./JScratchParser";
import { SimpleExpressionContext } from "./JScratchParser";
import { TermContext } from "./JScratchParser";
import { FactorContext } from "./JScratchParser";
import { FuncCallContext } from "./JScratchParser";
import { ConstantContext } from "./JScratchParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JScratchParser`.
 */
export interface JScratchListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JScratchParser.entry`.
	 * @param ctx the parse tree
	 */
	enterEntry?: (ctx: EntryContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.entry`.
	 * @param ctx the parse tree
	 */
	exitEntry?: (ctx: EntryContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.constDecl`.
	 * @param ctx the parse tree
	 */
	enterConstDecl?: (ctx: ConstDeclContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.constDecl`.
	 * @param ctx the parse tree
	 */
	exitConstDecl?: (ctx: ConstDeclContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.constExprDecl`.
	 * @param ctx the parse tree
	 */
	enterConstExprDecl?: (ctx: ConstExprDeclContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.constExprDecl`.
	 * @param ctx the parse tree
	 */
	exitConstExprDecl?: (ctx: ConstExprDeclContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.varInit`.
	 * @param ctx the parse tree
	 */
	enterVarInit?: (ctx: VarInitContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.varInit`.
	 * @param ctx the parse tree
	 */
	exitVarInit?: (ctx: VarInitContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.arrayInit`.
	 * @param ctx the parse tree
	 */
	enterArrayInit?: (ctx: ArrayInitContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.arrayInit`.
	 * @param ctx the parse tree
	 */
	exitArrayInit?: (ctx: ArrayInitContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.constVarInit`.
	 * @param ctx the parse tree
	 */
	enterConstVarInit?: (ctx: ConstVarInitContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.constVarInit`.
	 * @param ctx the parse tree
	 */
	exitConstVarInit?: (ctx: ConstVarInitContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.constArrayInit`.
	 * @param ctx the parse tree
	 */
	enterConstArrayInit?: (ctx: ConstArrayInitContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.constArrayInit`.
	 * @param ctx the parse tree
	 */
	exitConstArrayInit?: (ctx: ConstArrayInitContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.constExprVarInit`.
	 * @param ctx the parse tree
	 */
	enterConstExprVarInit?: (ctx: ConstExprVarInitContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.constExprVarInit`.
	 * @param ctx the parse tree
	 */
	exitConstExprVarInit?: (ctx: ConstExprVarInitContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.compoundAssign`.
	 * @param ctx the parse tree
	 */
	enterCompoundAssign?: (ctx: CompoundAssignContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.compoundAssign`.
	 * @param ctx the parse tree
	 */
	exitCompoundAssign?: (ctx: CompoundAssignContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.address`.
	 * @param ctx the parse tree
	 */
	enterAddress?: (ctx: AddressContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.address`.
	 * @param ctx the parse tree
	 */
	exitAddress?: (ctx: AddressContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.varAddress`.
	 * @param ctx the parse tree
	 */
	enterVarAddress?: (ctx: VarAddressContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.varAddress`.
	 * @param ctx the parse tree
	 */
	exitVarAddress?: (ctx: VarAddressContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.arrayAddress`.
	 * @param ctx the parse tree
	 */
	enterArrayAddress?: (ctx: ArrayAddressContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.arrayAddress`.
	 * @param ctx the parse tree
	 */
	exitArrayAddress?: (ctx: ArrayAddressContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.ref`.
	 * @param ctx the parse tree
	 */
	enterRef?: (ctx: RefContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.ref`.
	 * @param ctx the parse tree
	 */
	exitRef?: (ctx: RefContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.procCall`.
	 * @param ctx the parse tree
	 */
	enterProcCall?: (ctx: ProcCallContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.procCall`.
	 * @param ctx the parse tree
	 */
	exitProcCall?: (ctx: ProcCallContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.funcDef`.
	 * @param ctx the parse tree
	 */
	enterFuncDef?: (ctx: FuncDefContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.funcDef`.
	 * @param ctx the parse tree
	 */
	exitFuncDef?: (ctx: FuncDefContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.logicalTerm`.
	 * @param ctx the parse tree
	 */
	enterLogicalTerm?: (ctx: LogicalTermContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.logicalTerm`.
	 * @param ctx the parse tree
	 */
	exitLogicalTerm?: (ctx: LogicalTermContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.logicalFactor`.
	 * @param ctx the parse tree
	 */
	enterLogicalFactor?: (ctx: LogicalFactorContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.logicalFactor`.
	 * @param ctx the parse tree
	 */
	exitLogicalFactor?: (ctx: LogicalFactorContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpression?: (ctx: SimpleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpression?: (ctx: SimpleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.funcCall`.
	 * @param ctx the parse tree
	 */
	enterFuncCall?: (ctx: FuncCallContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.funcCall`.
	 * @param ctx the parse tree
	 */
	exitFuncCall?: (ctx: FuncCallContext) => void;

	/**
	 * Enter a parse tree produced by `JScratchParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `JScratchParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
}

