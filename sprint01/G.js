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

const reverseString = str => {
    return str.split('').reverse().join('');
}

function getBinaryNumber(number) {
    let binaryNumber = '';
    while (number > 1) {
        binaryNumber += number % 2;
        number = Math.floor(number / 2);
    }
    binaryNumber += number;
    return parseInt(reverseString(binaryNumber));
}

function solve() {
    const n = readInt();
    process.stdout.write(`${getBinaryNumber(n)}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}


function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

module.exports = { getBinaryNumber }
