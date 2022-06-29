const { getSum } = require('./K');

describe('test suite', ()=> {
    test('test 1', () => {
        expect(getSum([1, 1, 1], 1)).toBe(112);
    })
})
