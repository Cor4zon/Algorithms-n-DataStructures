const { getNeighbours } = require('./C');

describe('test suite', () => {
    test('test 1', () => {
        expect(getNeighbours(
            [[1, 2, 3],
            [0, 2, 6],
            [7, 4, 1],
            [2, 7, 0]], 3, 0)).toBe("7 7")
    });

    test('test 2', () => {
        expect(getNeighbours(
            [
                [1, 2, 3],
                [0, 2, 6],
                [7, 4, 1],
                [2, 7, 0],
            ], 0, 0
        )).toBe("0 2");
    })

    test('test 3', () => {
        expect(getNeighbours(
            [
                [1, 1, -1],
                [0, 7, 2],
                [-1, 1, -100]
            ], 1, 1
        )).toBe("0 1 1 2")
    })
})
