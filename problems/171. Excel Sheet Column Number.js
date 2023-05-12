/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result =0;
    for(let i=columnTitle.length-1; i>=0; i--){
        const charCode = columnTitle.charCodeAt(i)-64; //65(ASCII val of A) - 1
        const position = columnTitle.length - i - 1;
        result += charCode * Math.pow(26, position);
    }
    return result;
};

// Example:
// columnTitle = "ZY"

// i = 1, charCode = 25 (ASCII val of 'Y' - 64), position = 0, result = 25 * 26^0 = 25
// i = 0, charCode = 26 (ASCII val of 'Z' - 64), position = 1, result = 25 + 26 * 26^1 = 701

// Hence, the output should be 701.
