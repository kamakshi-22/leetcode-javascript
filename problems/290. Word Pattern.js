/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }

    const map = {}; //empty object


    for (let i = 0; i < pattern.length; i++) {

        // Get the current character and its corresponding word in the array of words.
        const char = pattern[i];
        const word = words[i];

        // If the current character is already in the map object, and if its corresponding value is not equal to the current word, return false.
        if (map[char] && map[char] !== word) {
            return false;
        }
        // If current word is already in the map object as a value, and if the current character is not yet in the map, return false.
        if (Object.values(map).includes(word) && !map[char]) {
            return false;
        }

        // Map the character to the word.
        map[char] = word;
    }
    // If all the mappings are valid, return true.
    return true;
}
