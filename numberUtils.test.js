const numberUtils = require('./numberUtils');

test('fibonacci', () => {
    expect(numberUtils.fibonacci(5)).toBe(5);
});

test('factorial', () => {
    expect(numberUtils.factorial(5)).toBe(120);
});

test('isPrime', () => {
    expect(numberUtils.isPrime(7)).toBe(true);
    expect(numberUtils.isPrime(8)).toBe(false);
});

test('gcd', () => {
    expect(numberUtils.gcd(12, 8)).toBe(4);
});

test('lcm', () => {
    expect(numberUtils.lcm(4, 6)).toBe(12);
});
