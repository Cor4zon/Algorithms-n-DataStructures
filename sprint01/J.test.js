const { factorize } = require('./J');

describe('test suite', () => {
    test('test 1', ()=> {
        expect(factorize(13)).toStrictEqual([13]);
    });

    test('test 2', ()=> {
        expect(factorize(2)).toStrictEqual([2]);
    })

    test('test 3', ()=> {
        expect(factorize(8)).toStrictEqual([2, 2, 2]);
    });

    test('test 4', ()=> {
        expect(factorize(100)).toStrictEqual([2, 2, 5, 5]);
    })
})
