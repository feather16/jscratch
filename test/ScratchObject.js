"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScratchObject = void 0;
class ScratchObject {
    constructor(name, address, size = 1) {
        this.value = undefined;
        this.name = name;
        this.address = address;
        this.size = size;
        this.isConst = false;
    }
    get isConstExpr() {
        return this.value !== undefined;
    }
}
exports.ScratchObject = ScratchObject;
