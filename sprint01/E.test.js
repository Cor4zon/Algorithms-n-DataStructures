const { getLongestWord } = require('./E');

describe('test suite', () => {
    test('test 1', () => {
        expect(getLongestWord(19, "i love segment tree")).toBe("segment");
    });

    test('test 2', () => {
        expect(getLongestWord(18, "    hello b ac    ")).toBe("hello");
    });

    test('test 3', () => {
        expect(getLongestWord(19, "  cat  and doggy777")).toBe("doggy777");
    });

    test('test 4', () => {
        expect(getLongestWord(17, "cat  and doggy777")).toBe("doggy777");
    });

    test('test 5', () => {
        expect(getLongestWord(21, "cat  and doggy777    ")).toBe("doggy777");
    });

    test('test 6', () => {
        expect(getLongestWord(21, "frog jumps from river")).toBe("jumps");
    });

    test('test 7', () => {
        expect(getLongestWord(11, " ligf kaakm")).toBe("kaakm");
    });
})


