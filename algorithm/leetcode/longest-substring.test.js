// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/
// Given a string s, find the length of the longest substring without repeating characters.
//   Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
//
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
//
//  Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
//   Example 4:
//
// Input: s = ""
// Output: 0
//
//
//
// Constraints:
//
//   0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
//

/**
 * @param {string} string
 * @return {number}
 */
function lengthOfLongestSubstring(string) {
  const window = { left: 0, right: 0 };
  const letterSet = new Set();
  let answer = 0;

  while (window.right < string.length) {
    let rightChar = string[window.right];

    // Moving left window in order to have a substring without duplicates
    while (letterSet.has(rightChar)) {
      let leftChar = string[window.left];
      letterSet.delete(leftChar);
      window.left++;
    }

    letterSet.add(rightChar);
    answer = Math.max(answer, window.right - window.left + 1);
    window.right++;
  }

  return answer;
}

test.concurrent.each`
  string       | expected
  ${"12345"}   | ${5}
  ${"abcabc"}  | ${3}
  ${"abccba"}  | ${3}
  ${"dvdf"}    | ${3}
  ${"aaaa"}    | ${1}
  ${""}        | ${0}
`("returns $expected when $string", async ({ string, expected }) => {
  expect(lengthOfLongestSubstring(string)).toBe(expected);
});
