/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const comparator = (a, b) => {
        const value1 = fn(a);
        const value2 = fn(b);

        return value1 - value2
    }

    const sorted = arr.sort(comparator)
    return sorted
};