// This is a second large dummy file to further increase the code size for Amazon Q Developer Customization.

function dummyFunction5(a, b) { return a + b + 1; }
function dummyFunction6(a, b) { return a - b - 1; }
function dummyFunction7(a, b) { return a * b * 2; }
function dummyFunction8(a, b) { return a / (b + 1 || 1); }

// Repeat a large block to increase file size
const bigArray2 = [];
for (let i = 0; i < 60000; i++) {
    bigArray2.push(dummyFunction5(i, i+2));
    bigArray2.push(dummyFunction6(i, i+2));
    bigArray2.push(dummyFunction7(i, i+2));
    bigArray2.push(dummyFunction8(i, i+2));
}

module.exports = {
    dummyFunction5,
    dummyFunction6,
    dummyFunction7,
    dummyFunction8,
    bigArray2
};
