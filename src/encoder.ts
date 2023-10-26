/*const OP_MAP: { [key: string]: string | number; } = {
    'push': 0,
    'ref': 1,
    'set': 2,
    'goto': 3,
    'gotoif': 4,
    'ret': 5,
    'copy': 6,
    'not': 7,
    'swap': 8,
    'nop': 9,
    'or': 10,
    'and': 11,
    'setarray': 12,
    'add': 100,
    'sub': 101,
    'mul': 102,
    'div': 103,
    'mod': 104,
    'eq': 200,
    'neq': 201,
    'gt': 202,
    'ge': 203,
    'lt': 204,
    'le': 205,
    'setDirection': 300,
    'getDirection': 301,
    'sayFor': 302,
    'say': 303,
    'thinkFor': 304,
    'think': 305,
    'setBackdrop': 306,
    'getBackdrop': 307,
    'playSoundUntilDone': 308,
    'startSound': 309,
    'stopAllSounds': 310,
    'setVolume': 311,
    'getVolume': 312,
    'wait': 313,
    'ask': 314,
    'keyPressed': 315,
    'mouseDonw': 316,
    'getMouseX': 317,
    'getMouseY': 318,
    'getTimer': 319,
    'resetTimer': 320,
    'eraseAll': 321,
    'draw': 400,
    'exit': 401,
    'random': 500,
    'join': 501,
    'letterOf': 502,
    'lengthOf': 503,
    'contains': 504,
    'round': 505,
    'abs': 506,
    'floor': 507,
    'ceiling': 508,
    'sqrt': 509,
    'sin': 510,
    'cos': 511,
    'tan': 512,
    'asin': 513,
    'acos': 513,
    'atan': 515,
    'ln': 516,
    'log': 517,
    'exp': 518,
    'exp10': 519,
}*/

export class Encoder{
    encode(intermediateCode: string): string{
        let labelMap: { [key: string]: number; } = {};
        let lines: string[] = [];
        const intermediateLines = intermediateCode.split('\n');
        for(const [i, line] of intermediateLines.entries()){
            if(line.includes(':')){
                const label = line.split(':')[0];
                labelMap[label] = i + 1;
            }
        }
        for(let line of intermediateLines){
            if(line.includes('#')){
                line = line.split('#')[0];
                while(line[line.length - 1] == ' '){
                    line = line.substring(0, line.length - 1);
                }
            }
            if(line.includes(':')){
                line = line.split(':')[1];
            }
            if(line.startsWith('@')){
                const label = line.substring(1);
                line = labelMap[label].toString();
            }
            /*if(line in OP_MAP){
                line = OP_MAP[line].toString();
            }*/
            lines.push(line);
        }
        return lines.join('\n');
    }
}   