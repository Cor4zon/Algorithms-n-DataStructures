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

const addBinaryNumbers = (first, second, extra) => {
    const sum = +first + +second + +extra;
    if (sum === 3) {
        return [1, 1];
    } else if (sum === 2) {
        return [0, 1];
    } else if (sum === 1) {
        return [1, 0];
    }
    return [0, 0];
}

function sumOfBinaries(firstNumber, secondNumber) {
    let resultNumber = "";
    let extra = 0;
    const deltaZeros = Math.abs(firstNumber.length - secondNumber.length);
    if (firstNumber.length > secondNumber.length) {
        secondNumber = '0'.repeat(deltaZeros) + secondNumber;
    } else {
        firstNumber = '0'.repeat(deltaZeros) + firstNumber;
    }

    let currentResult = 0;
    for (let i = firstNumber.length - 1; i >= 0; i--) {
        [currentResult, extra] = addBinaryNumbers(firstNumber[i], secondNumber[i], extra);
        resultNumber = currentResult + resultNumber;
    }

    if (extra == 1) {
        resultNumber = '1' + resultNumber;
    }
    return resultNumber;
}

function solve() {
    const firstNumber = readLine();
    const secondNumber = readLine();
    process.stdout.write(`${sumOfBinaries(firstNumber, secondNumber)}`);
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

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}

module.exports = { sumOfBinaries }
