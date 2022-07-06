class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            console.log('error')
            return;
        }
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    get_max() {
        if (this.isEmpty()) {
            return 'None';
        }

        const extraStack = new Stack();
        let currentItem = null;
        let maximum = -Infinity;
        while (this.isEmpty() === false) {
            currentItem = this.pop();
            if (currentItem > maximum) {
                maximum = currentItem;
            }
            extraStack.push(currentItem);
        }

        while (extraStack.isEmpty() === false) {
            this.push(extraStack.pop());
        }
        return maximum;
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
        if (commands[0] === 'push') {
            stack.push(commands[1])
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


