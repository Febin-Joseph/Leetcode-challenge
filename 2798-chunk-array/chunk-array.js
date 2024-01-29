/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (arr.length === 0) {
        return []
    }

    const chunksNum = Math.ceil(arr.length / size);

    let result = []
    for (let i = 0; i < chunksNum; i++) {
        const chunk = [];

    for (let j = 0; j < size && i * size + j < arr.length; j++) {
      chunk.push(arr[i * size + j]);
    }
    result.push(chunk);
    }
    return result
};
