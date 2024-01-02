/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const english = val => /^[a-zA-Z]$/.test(val)

    let left = 0;
    let right = s.length - 1;
    let chars = s.split('');

    while (left < right) {
        if (!english(chars[left])) {
            left++
        } else if (!english(chars[right])) {
            right--
        } else {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }
    return chars.join('')
};