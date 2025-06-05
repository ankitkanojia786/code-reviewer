function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function uniqueArray(arr) {
    return [...new Set(arr)];
}

function arraySum(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
}

function arrayAverage(arr) {
    if (arr.length === 0) return 0;
    return arraySum(arr) / arr.length;
}

module.exports = {
    mergeArrays,
    uniqueArray,
    arraySum,
    arrayAverage
};
