/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim(); // Trim whitespace from beginning and end of string
    let splitString = s.split(' '); // Split string at every space
    let n = splitString.length;
    let lastWord = splitString[n-1]; // Get the last element in the array
    return lastWord.length;
};
