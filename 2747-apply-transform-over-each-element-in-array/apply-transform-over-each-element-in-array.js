/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        transformed = fn.length === 2 ? fn(arr[i], i) : fn(arr[i]);

        result.push(transformed);
    }
    return result
};