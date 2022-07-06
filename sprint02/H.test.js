const { is_correct_bracket_seq } = require('./H');

describe('test suite', () => {
    test('test 1', () => {
        expect(is_correct_bracket_seq("[({})]")).toBe('True');
    });

    test('test 2', () => {
        expect(is_correct_bracket_seq("()")).toBe('True');
    });

    test('test 3', () => {
        expect(is_correct_bracket_seq("[")).toBe('False');
    })

    test('test 4', () => {
        expect(is_correct_bracket_seq("][]")).toBe('False');
    })

    test('test 5', () => {
        expect(is_correct_bracket_seq("{[][]()}")).toBe('True');
    })

    test('test 6', () => {
        expect(is_correct_bracket_seq("{[]][]()}")).toBe('False');
    })

    test('test 6', () => {
        expect(is_correct_bracket_seq("{[()}")).toBe('False');
    })

    test('test 6', () => {
        expect(is_correct_bracket_seq("{{{}")).toBe('False');
    })
})




