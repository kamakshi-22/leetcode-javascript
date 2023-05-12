/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let prevRow = [1];
    for(let i=1; i<=rowIndex; i++){
        let currentRow = [];
        for(let j=0; j<=i; j++){
            currentRow.push((prevRow[j-1] || 0) + (prevRow[j] || 0));
        }
        prevRow = currentRow;
    }
    return prevRow;
};
