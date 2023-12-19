/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of t) {
        if (!charCount[char]) {
            return char;
        } else {
            charCount[char]--;
        }
    }
}