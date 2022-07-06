const { transpose } = require('./A');

describe('test suite', () => {
    test('test 1', () => {
        expect(transpose([[1, 2], [3, 4]])).toStrictEqual([[1, 3], [2, 4]]);
    })

    test('test 2', () => {
        expect(transpose([[1, 2, 3], [0, 2, 6], [7, 4, 1], [2, 7, 0]])).toStrictEqual([[1, 0, 7, 2], [2, 2, 4, 7], [3, 6, 1, 0]]);
    })
})

