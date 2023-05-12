/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
        freq[t.charCodeAt(i) - 97]--;
    }
    freq[t.charCodeAt(t.length - 1) - 97]--;
    return String.fromCharCode(freq.findIndex(c => c === -1) + 97);
};

// s:abcd t:abcde
//const freq = new Array(26).fill(0);
//freq = [1, 1, 1, 1, -1, 0, ..., 0]  
// 'a' appears once in s, once in t, 'b' appears once in s, once in t, 'c' appears once in s, once in t, 'd' appears once in s, not in t, 'e' appears once in t, all other letters are zero.
//String.fromCharCode(freq.findIndex(c => c === -1) + 97);  // returns 'e'


