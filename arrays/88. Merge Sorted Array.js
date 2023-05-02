/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j= n-1;
    let k= m+n-1;
    while(i>=0 && j>=0){
        if(nums1[i]>=nums2[j]){
            nums1[k]=nums1[i];
            i--;
        }else{
            nums1[k]=nums2[j];
            j--;
        }
        k--;
    }
    /* copy remaining elements of nums2 to nums1 */
    while(j>=0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    return nums1;
};

/* 

nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

1st iteration : 1,2,3,0,0,6
2nd iteration: 1,2,3,0,5,6
3rd iteration: 1,2,3,3,5,6
4th iteration: 1,2,2,3,5,6
 */
