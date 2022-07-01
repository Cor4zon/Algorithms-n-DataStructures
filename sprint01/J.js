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
    let divider = 2;
    const multipliersArray = [];
    while (number !== divider) {
        if (number % divider === 0) {
            number /= divider;
            multipliersArray.push(divider);
        } else {
            if (divider > Math.sqrt(number)) {
                divider = number;
                break;
            }
            divider++;
        }
    }
    multipliersArray.push(divider);
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
