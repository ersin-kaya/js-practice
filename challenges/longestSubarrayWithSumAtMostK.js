// ✅ Question: Length of the Longest Subarray with Sum Not Exceeding k
// You are given an array arr consisting of positive integers and a positive integer k.
// Your task is to find the length of the longest contiguous subarray whose sum is less than or equal to k (sum ≤ k).
// 📌 Requirements:
// All elements are positive integers
// The subarray must be contiguous
// Built-in functions are not allowed
// The time complexity should ideally be O(n)
// The condition is: sum ≤ k (both less than and equal to k are valid)
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(1)
function longestSubarrayWithSumAtMostK(arr, k) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let currentLength = 0;
  let longestLength = 0;

  while (right < arr.length) {
    sum += arr[right];
    currentLength++;

    while (sum > k) {
      sum -= arr[left];
      currentLength--;
      left++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
    }

    right++;
  }

  return longestLength;
}

console.log(longestSubarrayWithSumAtMostK([1, 2, 1, 0, 1, 1, 0], 4)); // ➞ 5 ✅
console.log(longestSubarrayWithSumAtMostK([2, 3, 1, 2, 4, 3], 7)); // ➞ 3 ✅
console.log(longestSubarrayWithSumAtMostK([5, 1, 1, 1, 1], 3)); // ➞ 3 ✅
console.log(longestSubarrayWithSumAtMostK([1, 1, 1, 1], 10)); // ➞ 4 ✅
