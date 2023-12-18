/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        let val = arr.unshift(s[i])
    }

    for (let i = 0; i < s.length; i++) {
        s[i] = arr[i];
    }
};