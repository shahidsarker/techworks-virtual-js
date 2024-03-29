// 1. Two Sum
// Source: https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the two numbers such that they
//  add up to a specific target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
  // iterate over the nums values
  for (let i = 0; i < nums.length; i++) {
    // iterate over the rest of the values
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      // conditional
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

const testNum = [1, 2, 7, 11, 15];
const testTarget = 9;

twoSum(testNum, testTarget);
