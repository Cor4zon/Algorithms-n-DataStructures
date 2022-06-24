const { getBinaryNumber } = require('./G');

describe('test suite', () => {
    test('test 1', () => {
        expect(getBinaryNumber(1)).toBe(1);
    })

    test('test 2', () => {
        expect(getBinaryNumber(5)).toBe(101);
    })

    test('test 3', () => {
        expect(getBinaryNumber(14)).toBe(1110);
    })

    test('test 4', () => {
        expect(getBinaryNumber(3)).toBe(11);
    })

    test('test 5', () => {
        expect(getBinaryNumber(10000)).toBe(10011100010000);
    })

    test('test 6', () => {
        expect(getBinaryNumber(0)).toBe(0);
    })
})
