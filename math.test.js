const math = require('./math');

test('add', () => {
    expect(math.add(2, 3)).toBe(5);
});

test('subtract', () => {
    expect(math.subtract(5, 3)).toBe(2);
});

test('multiply', () => {
    expect(math.multiply(2, 3)).toBe(6);
});

test('divide', () => {
    expect(math.divide(6, 3)).toBe(2);
});

test('square', () => {
    expect(math.square(4)).toBe(16);
});

test('cube', () => {
    expect(math.cube(2)).toBe(8);
});

test('power', () => {
    expect(math.power(2, 3)).toBe(8);
});

test('sqrt', () => {
    expect(math.sqrt(9)).toBe(3);
});

test('abs', () => {
    expect(math.abs(-5)).toBe(5);
});
