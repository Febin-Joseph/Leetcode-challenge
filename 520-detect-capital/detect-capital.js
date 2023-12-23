/**
 * @param {string} word
 * @return {boolean}
 */

 var detectCapitalUse = function(word) {
     if (/^[A-Z]+$/.test(word) || /^[a-z]+$/.test(word) || /^[A-Z][a-z]*$/.test(word)) {
        return true;
    }
    return false;
};