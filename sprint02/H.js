class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return;
        }
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return;
        }
        return this.stack.at(-1);
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}


function checkIsOpenBracket(bracket) {
    const openBrackets = ["[", "(", "{"];
    return openBrackets.includes(bracket);
}

function checkIsBracketsSameType(openBracket, closeBracket) {
    const openBracketsArr = ["[", "(", "{"];
    const closeBracketsArr = ["]", ")", "}"];
    return openBracketsArr.indexOf(openBracket) === closeBracketsArr.indexOf(closeBracket);
}

function is_correct_bracket_seq(seq) {
    const stack1 = new Stack();

    for (let i = 0; i < seq.length; i++) {
        if (checkIsOpenBracket(seq[i])) {
            stack1.push(seq[i]);
        } else if (!checkIsBracketsSameType(stack1.pop(), seq[i])) {
            return 'False';
        }
    }

    return stack1.size() === 0 ? "True" : "False";
}

module.exports = { is_correct_bracket_seq }


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


function solve() {
    const line = readLine();
    process.stdout.write(`${is_correct_bracket_seq(line)}`);
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}


