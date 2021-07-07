// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
//
//
//
//   Example 1:
//
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
//
//   Example 2:
//
// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
//
//   Example 3:
//
// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
//
//
//
// Constraints:
//
//   1 <= nums.length <= 5 * 105
//   -231 <= nums[i] <= 231 - 1
//
//
// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let middle = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (current < min) {
      min = current;
      continue;
    }

    if (current > min && current < middle) {
      middle = current;
      continue;
    }

    if (current > middle) {
      return true;
    }
  }

  return false;
}

test.concurrent.each`
  nums         | expected
  ${[1, 2, 3, 4, 5]}   | ${true}
  ${[5, 4, 3, 2, 1]}   | ${false}
  ${[1, 5, 0, 4, 1, 3]}     | ${true}
  ${[4, 5, 7, 1, 3]}     | ${true}
  ${[2, 1, 5, 0, 4, 6]}  | ${true}
  ${[-231, -230, -229]}  | ${true}
  ${[-229, -230, -231]}  | ${false}
  ${[-231, -230, -229, -230, -231]}  | ${true}
  ${[1, 1, 1, 1, 1, 1]}  | ${false}
`("returns $expected when $nums", async ({ nums, expected }) => {
  expect(increasingTriplet(nums)).toBe(expected);
});
