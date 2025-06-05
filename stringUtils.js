function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

module.exports = {
    reverseString,
    isPalindrome,
    capitalize,
    countVowels
};
