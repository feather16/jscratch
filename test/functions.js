"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Func = void 0;
class Func {
    constructor(name, numArgs, hasReturnValue) {
        this.argAddress = undefined;
        this.name = name;
        this.numArgs = numArgs;
        this.hasReturnValue = hasReturnValue;
    }
}
exports.Func = Func;
