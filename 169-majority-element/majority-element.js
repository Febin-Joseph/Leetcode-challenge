/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count += 1;
        } else {
            count -= 1;
        }

        if (count === 0) {
            candidate = nums[i];
            count = 1;
        }
    }

    return candidate;
};