const lineByLine = require('n-readlines');

const liner = new lineByLine('/path/to/file');

let line;

while (line = liner.next()) {
    console.log(line);
}
