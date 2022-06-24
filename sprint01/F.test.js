const { isPalindrome } = require('./F');

describe('test suite', () => {
    test('test 1', () => {
        expect(isPalindrome('Many,,, YNam!!!!')).toBe(true);
    })

    test('test 2', () => {
        expect(isPalindrome('mMany475 YNam!!!!')).toBe(false);
    })

    test('test 3', () => {
        expect(isPalindrome('     ')).toBe(true);
    })

    test('test 4', () => {
        expect(isPalindrome('  3223    ')).toBe(true);
    })

    test('test 5', () => {
        expect(isPalindrome('43a89 ')).toBe(false);
    })
})
