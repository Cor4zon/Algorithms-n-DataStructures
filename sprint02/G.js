class Stack {
    constructor() {
        this.stack = [];
        this.max = -Infinity;
    }

    push(item) {
        this.stack.push(item);
        if (item > this.max) {
            this.max = item;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log('error');
            return;
        }
        const lastItem = this.stack.pop();

        if (lastItem === this.max) {
            this.updateMax()
        }
        return lastItem;
    }

    updateMax() {
        this.max = Math.max(...this.stack);
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    get_max() {
        return this.max !== -Infinity ? this.max : 'None';
    }
}

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
    const length = readInt();
    const stack = new Stack();

    for (let i = 0; i < length; i++) {
        const line = readLine();
        const commands = line.split(' ');
        if (commands[0] == 'push') {
            stack.push(Number(commands[1]))
        } else if (commands[0] === 'pop') {
            stack.pop();
        } else if (commands[0] === 'get_max') {
            console.log(stack.get_max());

        }
    }
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


