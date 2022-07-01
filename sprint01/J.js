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

function factorize(number) {
    const multipliersArray = [];
    while (number > 1) {
        if (number % 2 === 0) {
            multipliersArray.push(2);
            number /= 2;
            continue;
        }
        if (number % 3 === 0) {
            multipliersArray.push(3);
            number /= 3;
            continue;
        }
        if (number % 5 === 0) {
            multipliersArray.push(5);
            number /= 5;
            continue;
        }
        multipliersArray.push(number);
        return multipliersArray;
    }
    return multipliersArray;
}

function solve() {
    const number = readInt();
    const factorization = factorize(number)
    process.stdout.write(`${factorization.join(' ')}`);
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

module.exports = { factorize }
