/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join('')) * (x < 0 ? -1 : 1);
    return (reversedInt > Math.pow(2, 31) - 1 || reversedInt < -Math.pow(2, 31)) ? 0 : reversedInt;
};