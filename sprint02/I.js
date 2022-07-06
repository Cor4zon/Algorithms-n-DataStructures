class MyQueueSized {
    constructor(maxSize) {
        this.queue = new Array(maxSize);
        this.maxSize = maxSize;
        this.head = 0;
        this.tail = 0;
        this.queueSize = 0;
    }

    push(item) {
        if (this.queueSize !== this.maxSize) {
            this.queue[this.tail] = item
            this.tail = (this.tail + 1) % this.maxSize;
            this.queueSize += 1;
        } else {
            console.log('error');
        }
    }

    pop() {
        if (this.isEmpty()) {
            return 'None'
        } else {
            const lastItem = this.queue[this.head];
            this.queue[this.head] = null;
            this.head = (this.head + 1) % this.maxSize;
            this.queueSize -= 1;
            return lastItem;
        }
    }

    peek() {
        if (this.isEmpty()) {
            return 'None';
        } else {
            return this.queue[this.head];
        }
    }

    size() {
        return this.queueSize;
    }

    isEmpty() {
        return this.queueSize === 0;
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
        if (commands[0] == 'push') {
            queue.push(Number(commands[1]))
        } else if (commands[0] == 'pop') {
            console.log(queue.pop());
        } else if (commands[0] == 'peek') {
            console.log(queue.peek());
        } else if (commands[0] == 'size') {
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
