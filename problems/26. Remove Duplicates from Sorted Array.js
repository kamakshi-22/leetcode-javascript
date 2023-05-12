/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[k++] = nums[i];
        }
    }
    nums[k++] = nums[nums.length-1];
    nums.splice(k, nums.length - k);
    return k;
};
