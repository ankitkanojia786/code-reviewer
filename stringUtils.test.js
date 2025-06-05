const stringUtils = require('./stringUtils');

test('reverseString', () => {
    expect(stringUtils.reverseString('hello')).toBe('olleh');
});

test('isPalindrome', () => {
    expect(stringUtils.isPalindrome('madam')).toBe(true);
    expect(stringUtils.isPalindrome('hello')).toBe(false);
});

test('capitalize', () => {
    expect(stringUtils.capitalize('hello')).toBe('Hello');
});

test('countVowels', () => {
    expect(stringUtils.countVowels('hello')).toBe(2);
});
