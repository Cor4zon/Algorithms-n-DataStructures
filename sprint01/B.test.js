const { checkParity } = require('./B');

describe('test suite', () => {
    test('test 1', () => {
        expect(checkParity(2, 6, 4)).toBe(true);
    });

    test('test 2', () => {
        expect(checkParity(1, 2, -3)).toBe(false);
    });

    test('test 3', () => {
        expect(checkParity(7, 11, 7)).toBe(true);
    });

    test('test 4', () => {
        expect(checkParity(6, -2, 0)).toBe(true);
    });

    test('big test', () => {
        expect(checkParity(10e9, 2, -10e9)).toBe(true);
    });

    test('false big test', () => {
        expect(checkParity(10e9, 5, -10e9)).toBe(false);
    });

    test('negative numbers', () => {
        expect(checkParity(-1, 1, -1)).toBe(true);
    });
})
