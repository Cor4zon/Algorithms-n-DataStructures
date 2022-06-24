const { getLongestWord } = require('./E');

describe('test suite', () => {
    test('test 1', () => {
        expect(getLongestWord(19, "i love segment tree")).toBe("segment");
    });

    test('test 2', () => {
        expect(getLongestWord("    hello b ac    ")).toBe("hello");
    });

    test('test 3', () => {
        expect(getLongestWord("   ")).toBe("");
    });

    test('test 4', () => {
        expect(getLongestWord("frog jumps from river\n")).toBe("jumps");
    });
})
