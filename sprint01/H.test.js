const { sumOfBinaries } = require('./H');

describe('test suite', () => {
    test('test 1', () => {
        expect(sumOfBinaries('1000', '')).toBe('1000');
    })

    test('test 2', () => {
        expect(sumOfBinaries('1010', '1011')).toBe('10101');
    })

    test('test 3', () => {
        expect(sumOfBinaries('1', '1')).toBe('10');
    })
})
