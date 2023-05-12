/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    return cleanString == reversedString;
};
