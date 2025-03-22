// Question:
// You are given an array arr consisting of positive integers and an integer k.
// Write a function that returns the maximum average value among all contiguous subarrays of length k in the array.
// 📌 Rules:
// Only contiguous subarrays of length k should be considered
// The average is calculated as: sum of k elements divided by k
// Do not use any built-in functions (slice, reduce, Math.max, etc. are not allowed)
// The solution should ideally have O(n) time complexity (use the sliding window approach)
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(1)
function maxAverageOfSubarrayK(arr, k) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxAverage = 0;
  let step = 0;

  while (right < arr.length) {
    if (step < k) {
      step++;
      sum += arr[right];
    }

    if (step === k) {
      let currentAverage = sum / k;
      if (currentAverage > maxAverage) {
        maxAverage = currentAverage;
      }
      step--;
      sum -= arr[left];
      left++;
    }

    right++;
  }

  return maxAverage;
}

console.log(maxAverageOfSubarrayK([1, 12, -5, -6, 50, 3], 4)); // ➞ 12.75
// Explanation: Subarray [12, -5, -6, 50] has the maximum average
console.log(maxAverageOfSubarrayK([5, 5, 5, 5, 5], 3)); // ➞ 5.0
// Explanation: All subarrays of length 3 have same average
console.log(maxAverageOfSubarrayK([10, 1, 2, 3, 4, 5, 6], 2)); // ➞ 5.5
// Explanation: Subarray [10, 1] → average = 5.5, but [10,1] = 11/2 = 5.5 etc.
