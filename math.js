function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

function power(a, b) {
    return Math.pow(a, b);
}

function sqrt(a) {
    return Math.sqrt(a);
}

function abs(a) {
    return Math.abs(a);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    square,
    cube,
    power,
    sqrt,
    abs
};
