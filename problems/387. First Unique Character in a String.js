/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const charCount = {};

    // Count the occurrence of each character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]]) {
            charCount[s[i]]++;
        } else {
            charCount[s[i]] = 1;
        }
    }

    // Find the index of the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }

    return -1; // Return -1 if no non-repeating character found
};
