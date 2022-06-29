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

const bubbleSort = (line) => {
    const arr = line.split('');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
    }
    return arr.join('');
}

function getExcessiveLetter(firstLine, secondLine) {
    const firstLineCopy = bubbleSort(firstLine);
    const secondLineCopy = bubbleSort(secondLine);
    for (let i=0; i < secondLineCopy.length; i++) {
        if (firstLineCopy[i] !== secondLineCopy[i]) {
            return secondLineCopy[i];
        }
    }
}

function solve() {
    const firstLine = readLine();
    const secondLine = readLine();
    process.stdout.write(`${getExcessiveLetter(firstLine, secondLine)}`);
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

module.exports = { getExcessiveLetter }
