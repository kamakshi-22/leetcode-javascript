/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [];
    for(let i = 0; i<numRows ; i++){
        let rows = [];
        for(let j=0; j<=i; j++){
            if(j==0 || j== i){
                rows.push(1);
            }else{
                rows.push(triangle[i-1][j-1] + triangle[i-1][j]);
            }
        }
        triangle.push(rows);
    }
    return triangle;
};
