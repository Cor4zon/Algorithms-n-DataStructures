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

function sumOfBinaries(firstNumber, secondNumber) {
    let decFirstNumber = binToDec(firstNumber);
    let decSecondNumber = binToDec(secondNumber);
    let result = decFirstNumber + decSecondNumber;
    return decToBin(result);
}

function decToBin(number) {
    let binaryNumber = '';
    while (number > 1) {
        binaryNumber += number % 2;
        number = Math.floor(number / 2);
    }
    binaryNumber += number;
    return reverseString(binaryNumber);
}

function binToDec(number) {
    let decNumber = 0n;
    let order = 0;
    for (let i = number.length - 1; i >= 0; i--) {
        decNumber += BigInt(number[i] * (2 ** order));
        order++;
    }

    return decNumber;
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
