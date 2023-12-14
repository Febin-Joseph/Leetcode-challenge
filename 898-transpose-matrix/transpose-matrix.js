/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const newRow = [];
        for (let j = 0; j < matrix.length; j++) {
            newRow.push(matrix[j][i]);
        }
        result.push(newRow);
    }
    return result;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));