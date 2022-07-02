// ID 69271084
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

function calcKeys(trainer) {
    const keysCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            keysCounter[trainer[i][j]] += 1;
        }
    }
    return keysCounter;
}

function calcSumPoints(keysCounter, k) {
    let sum = 0;
    for (let i = 1; i < 10; i++) {
        if (keysCounter[i] > 0 && keysCounter[i] <= k * 2) {
            sum++;
        }
    }
    return sum;
}

function convertMatrixToInt(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = parseInt(matrix[i][j]);
        }
    }
}

function getMaxPointsSum(trainer, k) {
    convertMatrixToInt(trainer);
    const keysCounter = calcKeys(trainer);
    return calcSumPoints(keysCounter, k);
}


function solve() {
    const k = readInt();
    const trainer = readMatrix(4);

    process.stdout.write(`${getMaxPointsSum(trainer, k)}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split("").map(num => Number(num));
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

module.exports = { getMaxPointsSum }
