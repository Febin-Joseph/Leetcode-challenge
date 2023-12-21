/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = Array.from(s).filter(char => 'aeiouAEIOU'.includes(char));
    const result = Array.from(s).map(char => 'aeiouAEIOU'.includes(char) ? vowels.pop() : char).join('');
    return result;
};