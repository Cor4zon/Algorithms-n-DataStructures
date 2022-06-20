const { getWeatherRandomness } = require('./D');

describe('test suite', () => {
    test('test 1', () => {
        expect(getWeatherRandomness([-1, -10, -8, 0, 2, 0, 5])).toBe(3);
    });

    test('test 2', () => {
        expect(getWeatherRandomness([1, 2, 5, 4, 8])).toBe(2);
    });

    test('test 3', () => {
        expect(getWeatherRandomness([1])).toBe(1);
    });

    test('test 4', () => {
        expect(getWeatherRandomness([1, 1])).toBe(0);
    });

    test('test 5', () => {
        expect(getWeatherRandomness([1, 2])).toBe(1);
    });
})
