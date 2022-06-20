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

function compareNumeric(a, b) {
    if (+a > +b) return 1;
    if (+a === +b) return 0;
    if (+a < +b) return -1;
}

function filterEmptyNeighbours(neighbours) {
    return neighbours.filter(item => item !== "");
}

const getLeftNeghbour = (matrix, row, col) => {
    if (col > 0) {
        return matrix[row][col-1];
    }
    return "";
}

const getRightNeghbour = (matrix, row, col) => {
    const col_limit = matrix[0].length - 1;
    if (col < col_limit) {
        return matrix[row][col+1];
    }

    return "";
}

const getTopNeghbour = (matrix, row, col) => {
    if (row > 0) {
        return matrix[row-1][col];
    }
    return "";
}

const getBottomNeghbour = (matrix, row, col) => {
    const row_limit = matrix.length - 1;
    if (row < row_limit) {
        return matrix[row+1][col];
    }
    return "";
}

const formatResultString = (stringArray) => {
    return stringArray.sort(compareNumeric);
}

function getNeighbours(matrix, row, col) {
    let left = getLeftNeghbour(matrix, row, col);
    let right = getRightNeghbour(matrix, row, col);
    let top = getTopNeghbour(matrix, row, col);
    let bottom = getBottomNeghbour(matrix, row, col);

    const neighbours = filterEmptyNeighbours([top, left, right, bottom]);
    return formatResultString(neighbours);
}

function solve() {
    const rows = readInt();
    const cols = readInt();
    const matrix = readMatrix(rows);
    const rowId = readInt();
    const colId = readInt();

    process.stdout.write(`${getNeighbours(matrix, rowId, colId).join(' ')}`);
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

module.exports = { getNeighbours }
