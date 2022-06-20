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

const checkFirstDayTemperature = temperatures => {
    return (temperatures[0] > temperatures[1]) ? 1 : 0;
}

const checkLastDayTemperature = temperatures => {
    const day_count = temperatures.length;
    return (temperatures[day_count-1] > temperatures[day_count-2]) ? 1 : 0;
}

const checkRandomDayTemperature = (temperatures, day) => {
    if (
        temperatures[day] > temperatures[day+1] &&
        temperatures[day] > temperatures[day-1]
    ) {
        return 1;
    }
    return 0;
}

function getWeatherRandomness(temperatures) {
    if (temperatures.length === 1) {
        return 1;
    }

    let weatherRandomness = 0;
    weatherRandomness += checkFirstDayTemperature(temperatures);
    weatherRandomness += checkLastDayTemperature(temperatures);

    for (let i = 1; i < temperatures.length - 1; i++) {
        weatherRandomness += checkRandomDayTemperature(temperatures, i);
    }
    return weatherRandomness;
}

function solve() {
    const n = readInt();
    const temperatures = readArray();
    process.stdout.write(`${getWeatherRandomness(temperatures)}`);
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

module.exports = { getWeatherRandomness };
