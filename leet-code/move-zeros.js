// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeroIndexs = [];
    nums.forEach(function(num, index) {
        if (num === 0) {
            nums.push(0);
            zeroIndexs.push(index);
        }
    })
    zeroIndexs.forEach(function (zindex, index) {
        nums.splice(zindex - index,1);
    })
    return nums;
};

console.log(moveZeroes([0,0, 1, 0,1]))
