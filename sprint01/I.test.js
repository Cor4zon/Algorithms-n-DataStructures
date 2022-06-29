const { isPowerOfFour } = require('./I');

describe('test suite', () => {
    test('test 1', () => {
        expect(isPowerOfFour(1)).toBe(true);
    });

    test('test 2', () => {
        expect(isPowerOfFour(10000)).toBe(false);
    })

    test('test 3', () => {
        expect(isPowerOfFour(16)).toBe(true);
    })

    test('test 4', () => {
        expect(isPowerOfFour(15)).toBe(false);
    })

    test('test 5', () => {
        expect(isPowerOfFour(132)).toBe(false);
    });
})
