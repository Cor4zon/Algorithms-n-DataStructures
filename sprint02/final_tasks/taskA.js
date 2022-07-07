class MyDeckSized {
    constructor(maxSize) {
        this.deck = new Array(maxSize);
        this.head = 0;
        this.tail = 0;
        this.deckSize = 0;
        this.maxSize = maxSize;
    }

    pushFront(value) {
        if (this.deckSize === this.maxSize) {
            console.log('error');
        } else {
            this.#getHeadPointer();
            this.deck[this.head] = value;
            this.deckSize++;
        }

        if (this.deckSize === 1) {
            this.tail = this.head;
        }
    }

    pushBack(value) {
        if (this.deckSize === this.maxSize) {
            console.log('error');
        } else {
            this.tail = (this.tail + 1) % this.maxSize;
            this.deck[this.tail] = value;
            this.deckSize++;
        }

        if (this.deckSize === 1) {
            this.head = this.tail;
        }
    }

    popFront() {
        if (this.deckSize === 0) {
            return 'error';
        }
        const popItem = this.deck[this.head];
        this.head = (this.head + 1) % this.maxSize;
        this.deckSize--;

        if (this.deckSize === 0) {
            this.head = this.tail;
        }
        return popItem;
    }

    popBack() {
        if (this.deckSize === 0) {
            return 'error';
        }
        const popItem = this.deck[this.tail];
        this.#getTailPointer();
        this.deckSize--;

        if (this.deckSize === 0) {
            this.tail = this.head;
        }
        return popItem;
    }

    #getHeadPointer() {
        if (this.head > 0) {
            this.head--;
        }  else {
            this.head = (this.head - 1) + this.maxSize;
        }
    }

    #getTailPointer() {
        if (this.tail > 0) {
            this.tail--;
        } else {
            this.tail = (this.tail - 1) + this.maxSize;
        }
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
    const deck = new MyDeckSized(maxSize);

    for (let i = 0; i < length; i++) {
        const line = readLine();
        const commands = line.split(' ');
        if (commands[0] === 'push_front') {
            deck.pushFront(Number(commands[1]))
        } else if (commands[0] === 'push_back') {
            deck.pushBack(+commands[1])
        } else if (commands[0] === 'pop_front') {
            console.log(deck.popFront());
        } else if (commands[0] === 'pop_back') {
            console.log(deck.popBack());
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
