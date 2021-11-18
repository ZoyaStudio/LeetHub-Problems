/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let addToEnd = (index) => {
      var target = nums[index];
      nums.splice(index, 1);
      nums.push('_');
    }
    var count = nums.length;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        addToEnd(i);
        count--;
        i--;
      }
    }
    return count;
};