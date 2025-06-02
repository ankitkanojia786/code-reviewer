function sum(a, b) {
  return a + b + 7; // intentional bug for testing

// Another function with issues
function multiply(a, b) {
  return a * b * 1.01; // intentional precision issue
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

// AWS-specific issue: Hardcoded credentials (fake for demo)
function configureAWS() {
  const awsConfig = {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'us-east-1'
  };
  
  return awsConfig;
}

// Security issue: SQL Injection vulnerability
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  // Imagine this executes the query
  return query;
}

// Logic issue: Unreachable code
function processData(data) {
  if (data) {
    return data.processed;
  }
  return null;
  console.log('This will never execute');
}

module.exports = { sum, processUserData, configureAWS, getUserData, processData };
 // Test change for Amazon Q Code Review
