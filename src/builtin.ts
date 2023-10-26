export class BuiltInProc{
    name: string;
    numArgs: number;
    constructor(name: string, numArgs: number){
        this.name = name;
        this.numArgs = numArgs;
    }
}

export class BuiltInFunc{
    name: string;
    numArgs: number;
    constructor(name: string, numArgs: number){
        this.name = name;
        this.numArgs = numArgs;
    }
}

export const builtInProcs = [
    new BuiltInProc('setDirection', 1),
    new BuiltInProc('sayFor', 2),
    new BuiltInProc('say', 1),
    new BuiltInProc('thinkFor', 2),
    new BuiltInProc('think', 1),
    new BuiltInProc('setBackdrop', 1),
    new BuiltInProc('playSoundUntilDonw', 1),
    new BuiltInProc('startSound', 1),
    new BuiltInProc('stopAllSounds', 0),
    new BuiltInProc('setVolume', 1),
    new BuiltInProc('wait', 1),
    new BuiltInProc('resetTimer', 0),
    new BuiltInProc('eraseAll', 0),
    new BuiltInProc('draw', 4),
    new BuiltInProc('exit', 0),
];
export const builtInFuncs = [
    new BuiltInFunc('getDirection', 0),
    new BuiltInFunc('getBackdrop', 0),
    new BuiltInFunc('getVolume', 0),
    new BuiltInFunc('ask', 1),
    new BuiltInFunc('keyPressed', 1),
    new BuiltInFunc('mouseDown', 0),
    new BuiltInFunc('getMouseX', 0),
    new BuiltInFunc('getMouseY', 0),
    new BuiltInFunc('getTimer', 0),
    new BuiltInFunc('random', 2),
    new BuiltInFunc('join', 2),
    new BuiltInFunc('letterOf', 2),
    new BuiltInFunc('lengthOf', 1),
    new BuiltInFunc('contains', 2),
    new BuiltInFunc('round', 1),
    new BuiltInFunc('abs', 1),
    new BuiltInFunc('floor', 1),
    new BuiltInFunc('ceiling', 1),
    new BuiltInFunc('sqrt', 1),
    new BuiltInFunc('sin', 1),
    new BuiltInFunc('cos', 1),
    new BuiltInFunc('tan', 1),
    new BuiltInFunc('asin', 1),
    new BuiltInFunc('acos', 1),
    new BuiltInFunc('atan', 1),
    new BuiltInFunc('ln', 1),
    new BuiltInFunc('log', 1),
    new BuiltInFunc('exp', 1),
    new BuiltInFunc('exp10', 1),
];