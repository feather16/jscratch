import assert from "assert";

export class ScratchObject{
    name: string;
    address: number | undefined;
    size: number;
    isConst: boolean;
    value: number | string | undefined = undefined;
    constructor(name: string, address: number | undefined, size: number = 1){
        this.name = name;
        this.address = address;
        this.size = size;
        this.isConst = false;
    }
    get isConstExpr(): boolean{
        return this.value !== undefined;
    }
}