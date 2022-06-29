const { getExcessiveLetter } = require('./L');

describe('test suite', () => {
    test('test 1', () => {
        expect(getExcessiveLetter('xkctpx', 'xkctpxs')).toBe('s');
    });

    test('test 2', () => {
        expect(getExcessiveLetter('xktpx', 'xkctpx')).toBe('c');
    });

    test('test 3', () => {
        expect(getExcessiveLetter('go', 'ogg')).toBe('g');
    });
})
