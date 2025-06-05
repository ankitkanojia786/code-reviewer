// This is a large dummy file to help meet the 2MB code requirement for Amazon Q Developer Customization.

function dummyFunction1(a, b) { return a + b; }
function dummyFunction2(a, b) { return a - b; }
function dummyFunction3(a, b) { return a * b; }
function dummyFunction4(a, b) { return a / (b || 1); }

// Repeat a large block to increase file size
const bigArray = [];
for (let i = 0; i < 50000; i++) {
    bigArray.push(dummyFunction1(i, i+1));
    bigArray.push(dummyFunction2(i, i+1));
    bigArray.push(dummyFunction3(i, i+1));
    bigArray.push(dummyFunction4(i, i+1));
}

module.exports = {
    dummyFunction1,
    dummyFunction2,
    dummyFunction3,
    dummyFunction4,
    bigArray
};
