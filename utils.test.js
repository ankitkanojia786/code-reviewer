const utils = require('./utils');

test('getRandomInt returns value in range', () => {
    for (let i = 0; i < 10; i++) {
        const val = utils.getRandomInt(1, 5);
        expect(val).toBeGreaterThanOrEqual(1);
        expect(val).toBeLessThanOrEqual(5);
    }
});

test('shuffleArray returns array of same length', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = utils.shuffleArray([...arr]);
    expect(shuffled.length).toBe(arr.length);
    expect(shuffled.sort().join()).toBe(arr.sort().join());
});

test('clamp clamps values correctly', () => {
    expect(utils.clamp(5, 1, 10)).toBe(5);
    expect(utils.clamp(-1, 0, 10)).toBe(0);
    expect(utils.clamp(15, 0, 10)).toBe(10);
});
