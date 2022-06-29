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

const compareWords = (current, longest) => {
    return (current.length > longest.length) ? current : longest;
}

function getLongestWord(length, line) {
    let currentWord = "";
    let longestWord = "";

    for (let i = 0; i < length; i++) {
        if (line[i] === ' ' && currentWord.length > 0) {
            longestWord = compareWords(currentWord, longestWord);
            currentWord = "";
        } else if (line[i] !== ' ') {
            currentWord += line[i];
        }
    }
    longestWord = compareWords(currentWord, longestWord);

    return longestWord;
}

function solve() {
    const length = readInt();
    const line = readLine();
    const longestWord = getLongestWord(length, line)
    process.stdout.write(`${longestWord}`);
    process.stdout.write("\n");
    process.stdout.write(`${longestWord.length}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

module.exports = { getLongestWord }
