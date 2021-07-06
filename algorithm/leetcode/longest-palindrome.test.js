// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/780/
// Given a string s, return the longest palindromic substring in s.
//
//   Example 1:
//
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//
//   Example 2:
//
// Input: s = "cbbd"
// Output: "bb"
//
// Example 3:
//
// Input: s = "a"
// Output: "a"
//
// Example 4:
//
// Input: s = "ac"
// Output: "a"
//
//
//
// Constraints:
//
//   1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),
//

function longestPalindrome(string = "") {
  if (string.length === 0) {
    return "";
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < string.length; i++) {
    const middleOne = expandAroundCenter(string, i);
    const middleTwo = expandAroundCenter(string, i, true);
    const longestPalindromeLength = Math.max(middleOne, middleTwo);

    if (longestPalindromeLength > end - start) {
      start = Math.ceil(i - (longestPalindromeLength - 1) / 2);
      end = i + Math.floor(longestPalindromeLength / 2);
    }
  }

  return string.substring(start, end + 1);
}

// given a string, returns what is the size of the longest palindromic substring for a given boundary
function expandAroundCenter(string, position, centerInBetween) {
  let start = position;
  let end = centerInBetween ? position + 1 : position;

  while (start >= 0 && end < string.length && string[start] === string[end]) {
    start--;
    end++;
  }

  return end - start - 1;
}

function longestPalindromeB(string = "") {
  if (string.length === 0) {
    return "";
  }

  let longestPalindrome = "";

  for (let i = 0; i < string.length; i++) {
    const middleOne = expandAroundCenterB(string, i);
    const middleTwo = expandAroundCenterB(string, i, true);
    const palindrome =
      middleOne.length >= middleTwo.length ? middleOne : middleTwo;

    if (palindrome.length >= longestPalindrome.length) {
      longestPalindrome = palindrome;
    }
  }

  return longestPalindrome;
}

function expandAroundCenterB(string, position, centerInBetween) {
  let start = position;
  let end = position;

  // Palindrome's center can be in between two letters. Such palindromes have even number of letters (such as "abba") and its center are between the two 'b's.
  if (centerInBetween) {
    end++; // in case end + 1 is out of bounds, it returns ""

    if (end > string.length) {
      return "";
    }
  }

  while (start >= 0 && end < string.length && string[start] === string[end]) {
    start--;
    end++;
  }

  const palindromeLength = end - start - 1;
  return string.substring(
    Math.ceil(position - (palindromeLength - 1) / 2),
    Math.floor(position + palindromeLength / 2 + 1)
  );
}

test.concurrent.each`
  string       | expected
  ${""}   | ${""}
  ${"a"}   | ${"a"}
  ${"cbbd"}   | ${"bb"}
  ${"abcdcba"}   | ${"abcdcba"}
  ${"abba"}   | ${"abba"}
  ${"babad"}   | ${"aba"} //"bab" is also valid
`("returns $expected when $string", async ({ string, expected }) => {
  expect(longestPalindrome(string)).toBe(expected);
});

test.concurrent.each`
  string       | expected
  ${""}   | ${""}
  ${"a"}   | ${"a"}
  ${"cbbd"}   | ${"bb"}
  ${"abcdcba"}   | ${"abcdcba"}
  ${"abba"}   | ${"abba"}
  ${"babad"}   | ${"aba"} //"bab" is also valid
`("returns $expected when $string", async ({ string, expected }) => {
  expect(longestPalindromeB(string)).toBe(expected);
});
