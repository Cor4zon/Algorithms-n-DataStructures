const { getMaxPointsSum } = require('./task2')

describe('test suite', () => {
    test('test1', () => {
        expect(getMaxPointsSum([['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.']], 2)).toBe(0);
    })

    test('test2', () => {
        expect(getMaxPointsSum([['1', '2', '3', '1'], ['2', '.', '.', '2'], ['2', '.', '.', '2'], ['2', '.', '.', '2']], 3)).toBe(2);
    })

    test('test3', () => {
        expect(getMaxPointsSum([['1', '1', '1', '1'], ['9', '9', '9', '9'], ['1', '1', '1', '1'], ['9', '9', '1', '1']], 4)).toBe(1);
    })

    test('test4', () => {
        expect(getMaxPointsSum([['2', '.', '1', '8'], ['8', '8', '6', '4'], ['4', '9', '5', '9'], ['.', '6', '6', '8']], 2)).toBe(7);
    })
})
