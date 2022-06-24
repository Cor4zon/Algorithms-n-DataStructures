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

const isDigit = symbol => {
        return symbol.charCodeAt(0) > 47 &&
            symbol.charCodeAt(0) < 58;
}

const isLetter= symbol => {
    return symbol.charCodeAt(0) > 96 &&
        symbol.charCodeAt(0) < 123;
}

const isLetterOrDigit = symbol => {
    return isDigit(symbol) || isLetter(symbol);
}

function isPalindrome(line) {
    line = line.toLowerCase();
    let left = 0;
    let right = line.length - 1;

    while (left < right) {
        if (!isLetterOrDigit(line[left])) {
            left++;
            continue;
        }
        if (!isLetterOrDigit(line[right])) {
            right--;
            continue;
        }
        if (line[left] !== line[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function solve() {
    const line = readLine();
    if (isPalindrome(line)) {
        console.log("True")
    } else {
        console.log("False")
    }
}


function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
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

module.exports = { isPalindrome };
