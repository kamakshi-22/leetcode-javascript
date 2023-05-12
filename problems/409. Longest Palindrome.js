/**
 * @param {string} s
 * @return {number}
 */
/* 
- Count the number of each character in the string.
- Iterate through the character count and add up the count of characters that have an even number of occurrences.
- If there are any characters with an odd number of occurrences, we can add one to the total length of the palindrome. 
- This is because we can place one of these odd characters in the middle of the palindrome.
*/

var longestPalindrome = function (s) {
    const charCount = {};
    let maxLength = 0;
    let hasOddCount = false;

    // Count the number of each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Iterate through the character count and add up the count of characters that have an even number of occurrences
    for (const char in charCount) {
        const count = charCount[char];
        if (count % 2 === 0) {
            maxLength += count;
        } else {
            maxLength += count - 1;
            hasOddCount = true;
        }
    }

    // Add one to the total length of the palindrome if there are any characters with an odd number of occurrences
    if (hasOddCount) {
        maxLength += 1;
    }

    return maxLength;
};
