const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function getSum(listNumber, number) {
    let numberFromList = 0;
    for (let i = 0; i < listNumber.length; i++) {
        numberFromList *= 10;
        numberFromList += listNumber[i];
    }
    return String(numberFromList + number).split('');
}

function solve() {
    const length = readInt();
    const listNumber = readArray()
    const number = readInt();

    process.stdout.write(`${getSum(listNumber, number).join(' ')}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

module.exports = { getSum }
