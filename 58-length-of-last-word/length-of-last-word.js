/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    splStr = s.split(' ');

    for (let i = splStr.length - 1; i >= 0; i--) {
        const lastVal = splStr[i];

        if (lastVal.length > 0) {
            return lastVal.length
        }
    }
        return 0
};

console.log(lengthOfLastWord("Hello World"))