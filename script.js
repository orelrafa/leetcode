"use strict";

/** TWO SUM PROBLEM */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**for(i=0; i<nums.length; i++){
        for(j=0; j<nums.length; j++){
            if(i==j){
                continue;
            }
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
     Complexity: O(n^2)
     */

  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
  /**Complexity: O(n) */
};
