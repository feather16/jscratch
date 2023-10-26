export class Func{
    name: string;
    numArgs: number;
    hasReturnValue: boolean;
    argAddress: number | undefined = undefined;
    constructor(name: string, numArgs: number, hasReturnValue: boolean){
        this.name = name;
        this.numArgs = numArgs;
        this.hasReturnValue = hasReturnValue;
    }
}