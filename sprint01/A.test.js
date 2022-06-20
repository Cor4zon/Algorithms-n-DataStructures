const { evaluateFunction } = require('./A');


describe('yandex test 1', () => {
    test('test 1', () => {
        expect(evaluateFunction(-5, -8, -2, 7)).toBe(-183);
    });

    test('test 2', () => {
        expect(evaluateFunction(0, -100, 1000, 2)).toBe(2);
    });

    test('test 3', () => {
        expect(evaluateFunction(2, 8, 9, -10)).toBe(40);
    });
});

