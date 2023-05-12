/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const lastChar = stack.pop();
            if (!lastChar || 
                (char === ')' && lastChar !== '(') || 
                (char === '}' && lastChar !== '{') ||
                (char === ']' && lastChar !== '[')) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
