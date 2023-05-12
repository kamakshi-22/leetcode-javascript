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
