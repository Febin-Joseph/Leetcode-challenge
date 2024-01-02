/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false
    }

    const concat = s + s;

    return concat.includes(goal)
};