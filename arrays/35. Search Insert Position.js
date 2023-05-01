/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]==target){
            return mid;
        }else if(nums[mid]<target){
            left = mid+1;
        }else{
            right = mid - 1;
        }
    }
    return left;
};

/**
nooooooo like this:

n is the length of the nums array
after 1st iteration, length = n/2
after kth iteration = n/2^k

when target is found: n / 2^k = 1
=> 2^k = n
=> k = log₂(n)
**/
