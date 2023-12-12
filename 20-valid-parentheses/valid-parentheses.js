/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const params = {')': '(', '}': '{', ']': '['};
    for (let i = 0; i < s.length; i++) {
        let currentStr = s[i];
        
        if (params[currentStr]) {
            let topElement = stack.length === 0 ? '' : stack.pop();
            
            if(topElement !== params[currentStr]) {
                return false
            }
        } else {
            stack.push(currentStr);
        }
    }
    return stack.length === 0
};

console.log(isValid("(][]{}"))