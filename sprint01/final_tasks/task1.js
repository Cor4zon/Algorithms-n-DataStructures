// ID 69271658
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

const getNextEmpty = (street) => {
    for (let i = 0; i < street.length; i++) {
        if (street[i] === 0) {
            return i;
        }
    }
    return Infinity;
}

const calcNearestEmpty = (currentPos, leftEmpty, rightEmpty) => {
    const leftDistance = Math.abs(currentPos - leftEmpty);
    const rightDistance = Math.abs(currentPos - rightEmpty);
    return Math.min(leftDistance, rightDistance);
}

function getNeighborsDestiny(street) {
    const density = [];
    let left = Infinity;
    let right = -Infinity;
    for (let i = 0; i < street.length; i++) {
        if (street[i] === 0) {
            density.push(0);
            left = i;
            continue;
        }
        if (i >= right) {
            right = i + getNextEmpty(street.slice(i));
        }
        density.push(calcNearestEmpty(i, left, right));
    }
    return density;
}

function solve() {
    const n = readInt();
    const street = readArray();
    process.stdout.write(`${getNeighborsDestiny(street).join(' ')}`);
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

module.exports = { getNeighborsDestiny }
