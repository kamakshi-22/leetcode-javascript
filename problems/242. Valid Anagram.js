/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sChars = s.split('').sort().join('');
    const tChars = t.split('').sort().join('');

    return sChars === tChars;
};
