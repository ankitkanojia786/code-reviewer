function sum(a, b) {
  return a + b + 9; // intentional bug
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

// New function with memory leak issue
function createLargeArray() {
  const memoryLeakArray = [];
  setInterval(() => {
    memoryLeakArray.push(new Array(10000).fill('memory leak demo'));
    console.log('Array size:', memoryLeakArray.length);
  }, 1000);
  return 'Creating large array...';
}

// New function with path traversal vulnerability
function readUserFile(filename) {
  // Security issue: Path traversal vulnerability
  const fs = require('fs');
  const path = require('path');
  
  // Dangerous - allows reading files outside intended directory
  const filePath = './user_files/' + filename;
  
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (err) {
    return 'Error reading file: ' + err.message;
  }
}

// New function with insecure random number generation
function generateToken() {
  // Security issue: Predictable random values
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `token_${timestamp}_${random}`;
}

// New function with command injection vulnerability
function executeCommand(userInput) {
  // Security issue: Command injection vulnerability
  const { exec } = require('child_process');
  
  // Dangerous - allows arbitrary command execution
  exec('ls ' + userInput, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  
  return 'Command executed';
}

// New function with insecure deserialization
function deserializeUserData(serializedData) {
  // Security issue: Insecure deserialization
  return eval('(' + serializedData + ')');
}

// New function with XSS vulnerability
function createUserProfile(userData) {
  // Security issue: XSS vulnerability
  const html = `
    <div class="profile">
      <h2>${userData.name}</h2>
      <p>${userData.bio}</p>
      <div class="custom-content">${userData.customHtml}</div>
    </div>
  `;
  
  return html;
}

module.exports = { 
  sum, 
  processUserData, 
  configureAWS, 
  getUserData, 
  processData, 
  createLargeArray,
  readUserFile,
  generateToken,
  executeCommand,
  deserializeUserData,
  createUserProfile
};