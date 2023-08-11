"use strict";
// add whatever parameters you deem necessary & write docstring
/**averagePairs: returns a boolean indicating if
 * the targetAvg can be found by averaging a pair of
 * numbers w/in array nums
 */
function averagePair(nums, targetAvg) {

  //assign pointers
  let left = 0;
  let right = nums.length - 1;

  //write a while loop that keeps moving my pointers
  while (left < right) {
    let avg = (nums[left] + nums[right]) / 2;
    //if we find the avg, return true!
    if (avg === targetAvg) {
      return true;
    }
    //have to check if the avg is too high
    //- move the right pointer down
    if (avg > targetAvg) {
      right--;
    }
    //or avg too low
    // -move the left pointer up
    if (avg < targetAvg) {
      left++;
    }
  }
  //if the left pointer, crosses the right, and no dice
  // return false
  return false;
}

/*
Constraint: O(n)
inputs:
  array of numbers, in order
  a number (which is our targetAvg)
outputs:
  boolean (NOT paired numbers)

A bunch of in-order numbers
Looks for pairs of numbers in which (number + othernumber)/2
= targetAvg
**there can be more than one... but we don't care
We just need to know if ONE exists


-fail on nums.length < 2;

how to solve:
add pairs of numbers from this array together and halve them
until I find the target value, or run out of pairs

if I want to do it with fewer operations,

I can start from either end, and adjust which way I'm looking
through the values, BECAUSE they are ordered

Simpler options:
Doing it iteratively
Avg'ing is easy... but if the math is harder,
  simplify the math! Look for an easier pair first
  or restate terms
*/
