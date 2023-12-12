/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    
    let result = 0
    
    for (let i = 0; i < s.length; i++) {
        let currentRoman = roman[s[i]];
        let nextRoman = roman[s[i + 1]];
        
        if (nextRoman > currentRoman) {
            result += (nextRoman - currentRoman)
            i++
        } else {
            result += currentRoman
        }
    }
    return result
};

console.log(romanToInt("IV"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))