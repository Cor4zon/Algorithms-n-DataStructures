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

function isPowerOfFour(number) {
    let degree = 0;
    while (true) {
        let current = 4 ** degree;
        if (current === number) {
            return true;
        }
        if (current > number) {
            return false;
        }
        degree++;
    }
}

function solve() {
    const number = readInt();
    if (isPowerOfFour(number)) {
        console.log("True");
    } else {
        console.log("False");
    }
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

module.exports = { isPowerOfFour }
