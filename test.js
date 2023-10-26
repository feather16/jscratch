const fs = require('fs');
const compiler = require('./test/compiler.js')

function test(inputFileName, intermeidiateFileName, outputFileName){
    const inputText = fs.readFileSync(inputFileName, {encoding: 'utf-8'});
    const {assemblyCode, intermediateCode} = compiler.compile(inputText);
    console.log(`Compiled ${inputFileName}.`);
    fs.writeFileSync(intermeidiateFileName, intermediateCode, {encoding: 'utf-8'});
    fs.writeFileSync(outputFileName, assemblyCode, {encoding: 'utf-8'});
}

const testNames = [
    'arithmetic_operators',
    'control',
    'logic',
    'function',
    'prime',
    'minecraft',
]
for(const testName of testNames){
    test(
        `jscratch/src/${testName}.txt`, 
        `jscratch/il/${testName}.txt`, 
        `jscratch/asm/${testName}.txt`,
    );
}