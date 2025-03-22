// Question:
// Given an integer array arr that contains only 0s and 1s, and a positive integer k,
// your task is to find the length of the longest contiguous subarray that contains at most k zeros.
// 🔹 An O(n) solution is possible using the sliding window technique.
// 🔹 Do not use any built-in functions.
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// Time complexity: O(n), space complexity: O(1)
function longestSubarrayWithMaxKZeros(arr, k) {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let maxLength = 0;

  while (right < arr.length) {
    if (arr[right] === 0) {
      zeroCount++;
    }

    // We could use an if condition instead of while here, but we prefer while to ensure reliability in different scenarios.
    while (zeroCount > k) {
      if (arr[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    let windowLength = right - left + 1;
    if (windowLength > maxLength) {
      maxLength = windowLength;
    }

    right++;
  }

  return maxLength;
}

console.log(longestSubarrayWithMaxKZeros([1, 1, 0, 1, 0, 1, 1, 0, 1], 2)); // 7
console.log(longestSubarrayWithMaxKZeros([1, 0, 1, 0, 1, 0, 1], 1)); // 3
console.log(longestSubarrayWithMaxKZeros([1, 1, 1, 1], 0)); // 4
console.log(longestSubarrayWithMaxKZeros([0, 0, 0, 1], 1)); // 2
