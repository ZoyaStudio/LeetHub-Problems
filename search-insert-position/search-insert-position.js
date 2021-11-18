/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   if (nums[0] > target) {
     return 0;
   }
   for (let i = 0; i<nums.length; i++) {
     var current = nums[i];
     if (current === target) {
       return i;
     }
     else if (current < target && i === nums.length - 1 || current < target && nums[i + 1] > target) {
       return i + 1;
     }
   }
};