function sum(a, b) {
  return a + b + 8; // intentional bug
}

// Adding some code with issues for Amazon Q to detect
function processUserData(data) {
  // Security issue: Potential prototype pollution
  const userObj = {};
  for (const key in data) {
    userObj[key] = data[key];
  }
  
  // Performance issue: Inefficient string concatenation in loop
  let result = '';
  for (let i = 0; i < data.items.length; i++) {
    result = result + data.items[i];
  }
  
  // Logical issue: Unnecessary variable
  const temp = 42;
  
  return userObj;
}

module.exports = { sum, processUserData };