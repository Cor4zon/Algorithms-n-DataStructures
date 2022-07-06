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

function printMatrix(matrix) {
    let matrixString = "";

    for (let i = 0; i < matrix.length; i++) {
        let matrixRow = "";
        for (let j = 0; j < matrix[0].length; j++) {
            matrixRow += matrix[i][j] + " ";
        }
        matrixString += matrixRow + '\n';
    }
    return matrixString;
}

function transpose(matrix) {
    const transposeMatrix = [];
    for (let j = 0; j < matrix[0].length; j++) {
        transposeMatrix.push([]);
        for (let i = 0; i < matrix.length; i++) {
            transposeMatrix[j].push(matrix[i][j]);
        }
    }
    return transposeMatrix;
}

function solve() {
    const rows = readInt();
    const cols = readInt();
    if (rows <= 0 || cols <= 0) {
        return
    }
    const matrix = readMatrix(rows);

    process.stdout.write(`${printMatrix(transpose(matrix))}`);
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

function readMatrix(rowsCount) {
    var arr = [];
    for (let i = 0; i !== rowsCount; i++) {
        arr.push(readArray())
    }
    return arr;
}

module.exports = { transpose }
