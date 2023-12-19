/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let result = (nums.length * (nums.length + 1)) / 2;

    for (let i = 0; i < nums.length; i++) {
        const actual = nums[i];
        result -= actual; 
    }

    return result
};