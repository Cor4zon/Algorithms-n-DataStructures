class MyQueueSized {
    constructor(max_size) {
        this.queue = [];
        this.max_size = max_size;
    }

    push(item) {
        if (this.size() < this.max_size) {
            this.queue.push(item);
        } else {
            console.log('error')
            return;
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log('None');
            return;
        }
        console.log(this.queue.shift());
    }

    peek() {
        if (this.isEmpty()) {
            console.log('None');
            return;
        }
        console.log(this.queue[0]);
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.size() === 0;
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
    const maxSize = readInt();
    const queue = new MyQueueSized(maxSize);

    for (let i = 0; i < length; i++) {
        const line = readLine();
        const commands = line.split(' ');
        if (commands[0] === 'push') {
            queue.push(Number(commands[1]))
        } else if (commands[0] === 'pop') {
            queue.pop();
        } else if (commands[0] === 'peek') {
            queue.peek();
        } else if (commands[0] === 'size') {
            console.log(queue.size());
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


