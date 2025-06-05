const arrayUtils = require('./arrayUtils');

test('mergeArrays merges two arrays', () => {
    expect(arrayUtils.mergeArrays([1,2], [3,4])).toEqual([1,2,3,4]);
});

test('uniqueArray returns unique values', () => {
    expect(arrayUtils.uniqueArray([1,2,2,3,3,3])).toEqual([1,2,3]);
});

test('arraySum returns sum of array', () => {
    expect(arrayUtils.arraySum([1,2,3,4])).toBe(10);
});

test('arrayAverage returns average of array', () => {
    expect(arrayUtils.arrayAverage([2,4,6,8])).toBe(5);
    expect(arrayUtils.arrayAverage([])).toBe(0);
});
