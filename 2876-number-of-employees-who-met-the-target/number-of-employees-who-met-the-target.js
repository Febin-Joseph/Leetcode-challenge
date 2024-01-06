/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let empl = [];

    for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
        empl.push(i)
        }
    }
    return empl.length
};