/**
 * Utility functions for the application
 */

// Insecure input validation function with regex DoS vulnerability
function validateEmail(email) {
  // Vulnerable to ReDoS (Regular Expression Denial of Service)
  const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
}

// Insecure password validation
function validatePassword(password) {
  // Too simple, doesn't enforce strong passwords
  return password && password.length >= 8;
}

// Insecure data sanitization
function sanitizeInput(input) {
  // Incomplete sanitization
  return input.replace(/<script>/gi, '');
}

// Insecure random token generation
function generateSessionToken() {
  // Predictable token generation
  return Math.random().toString(36).substring(2, 15);
}

// Insecure object merging with prototype pollution risk
function mergeObjects(target, source) {
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      if (!target[key]) target[key] = {};
      mergeObjects(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

module.exports = {
  validateEmail,
  validatePassword,
  sanitizeInput,
  generateSessionToken,
  mergeObjects
};