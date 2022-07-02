const { getNeighborsDestiny, solve } = require('./task1');

describe('test suite', () => {
    test('test 1', () => {
        expect(getNeighborsDestiny([0, 1, 4, 9, 0])).toStrictEqual([0, 1, 2, 1, 0]);
    });

    test('test 2', () => {
        expect(getNeighborsDestiny([0])).toStrictEqual([0]);
    })

    test('test 3', () => {
        expect(getNeighborsDestiny([0, 0])).toStrictEqual([0, 0]);
    })

    test('test 4', () => {
        expect(getNeighborsDestiny([0, 7, 9, 4, 8, 20])).toStrictEqual([0, 1, 2, 3, 4, 5]);
    })

    test('test 5', () => {
        expect(getNeighborsDestiny([0, 1, 4, 9, 0, 0, 1, 4, 9, 0])).toStrictEqual([0, 1, 2, 1, 0, 0, 1, 2, 1, 0]);
    });
})
