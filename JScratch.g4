grammar JScratch;

entry
    : statement+ EOF
    ;

statement
    : varDecl ';'
    | constDecl ';'
    | constExprDecl ';'
    | assign ';'
    | compoundAssign ';'
    | procCall ';'
    | '{' statement* '}'
    | ifStatement
    | whileStatement
    | funcDef
    ;

varDecl
    : 'var' (varInit | arrayInit) (',' (varInit | arrayInit))*
    ;

constDecl
    : 'const' (constVarInit | constArrayInit) (',' (constVarInit | constArrayInit))*
    ;

constExprDecl
    : 'constexpr' constExprVarInit (',' constExprVarInit)*
    ;

varInit
    : IDENTIFIER ('=' expression)?
    ;

arrayInit
    : IDENTIFIER '[' CONSTANT? ']' ('=' '[' expression (',' expression)+ ','? ']')?
    ;

constVarInit
    : IDENTIFIER '=' expression
    ;

constArrayInit
    : IDENTIFIER '[' CONSTANT? ']' '=' '[' expression (',' expression)+ ','? ']'
    ;

constExprVarInit
    : IDENTIFIER '=' CONSTANT
    ;

assign
    : address '=' expression
    ;

compoundAssign
    : address COMPOUND_ASSIGN_OPERATOR expression
    ;

address
    : varAddress
    | arrayAddress
    ;

varAddress
    : IDENTIFIER
    ;

arrayAddress
    : IDENTIFIER '[' expression ']'
    ;

ref
    : address
    ;

procCall
    : IDENTIFIER '(' (expression (',' expression)* ','?)? ')'
    ;

ifStatement
    : 'if' '(' expression ')' statement ('else' statement)?
    ;

whileStatement
    : 'while' '(' expression ')' statement
    ;

funcDef
    : 'function' IDENTIFIER '(' (IDENTIFIER (',' IDENTIFIER)* ','?)? ')' '{' statement* ('return' expression? ';')? '}'
    ;

expression
    : logicalTerm (LOGICAL_ADD_OPERATOR logicalTerm)*
    ;

logicalTerm
    : logicalFactor (LOGICAL_MUL_OPERATOR logicalFactor)*
    ;

logicalFactor
    : simpleExpression (REL_OPERATOR simpleExpression)?
    | LOGICAL_NOT_OPERATOR factor
    | LOGICAL_NOT_OPERATOR '(' expression ')'
    ;

simpleExpression
    : term (ADD_OPERATOR term)*
    ;

term
    : factor (MUL_OPERATOR factor)*
    ;

factor
    : constant
    | ref
    | '(' expression ')'
    | funcCall
    ;

funcCall
    : IDENTIFIER '(' (expression (',' expression)* ','?)? ')'
    ;

ADD_OPERATOR
    : '+'
    | '-'
    ;

MUL_OPERATOR
    : '*'
    | '/'
    | '%'
    ;

LOGICAL_ADD_OPERATOR
    : '|'
    ;

LOGICAL_MUL_OPERATOR
    : '&'
    ;

LOGICAL_NOT_OPERATOR
    : '!'
    ;

COMPOUND_ASSIGN_OPERATOR
    : '+='
    | '-='
    | '*='
    | '/='
    | '%='
    | '|='
    | '&='
    ;

REL_OPERATOR
    : '=='
    | '!='
    | '>'
    | '>='
    | '<'
    | '<='
    ;

constant
    : CONSTANT
    ;

CONSTANT
    : NUMBER_CONSTANT
    | STRING_CONSTANT
    | ARRAY_SIZE
    ;

IDENTIFIER
    : [_a-zA-Z][_0-9a-zA-Z]*
    ;

NUMBER_CONSTANT
    : [-]?[0-9]+('.'[0-9]+)?
    ;

STRING_CONSTANT
    : '\'' CHARACTER* '\''
    | '"' CHARACTER* '"'
    ;

ARRAY_SIZE
    : '#' IDENTIFIER
    ;

fragment CHARACTER
    : (~['"\\\r\n])
    ;

WS:
    (' '|'\t'|'\n'|'\r')+ -> skip;
MultiLineComment:
    '/*' .*? '*/' -> skip;
SingleLineComment:
    '//' ~[\r\n\u2028\u2029]* -> skip;