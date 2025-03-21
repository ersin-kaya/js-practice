// No built-in JavaScript functions are used in this solution.
// // First approach
// // time complexity: O(n^2), space complexity: O(n^2)
// function longestIncreasingSubsequence(arr) {
//   let subsequences = {};
//   let startIndex = 0;

//   while (startIndex < arr.length) {
//     let prevValue = arr[startIndex];
//     for (let i = startIndex; i < arr.length; i++) {
//       if (i === startIndex) {
//         subsequences[startIndex] = [arr[i]];
//       }
//       if (arr[i] > prevValue) {
//         prevValue = arr[i];
//         // Using spread (...) here causes O(n^3) time complexity due to repeated array copying
//         // subsequences[startIndex] = [...subsequences[startIndex], arr[i]]; // time.c.: O(k), space.c.: O(k)
//         subsequences[startIndex][subsequences[startIndex].length] = arr[i]; // time.c.: O(1), space.c.: O(1)
//       }
//     }
//     startIndex++;
//   }

//   let longest = 0;
//   for (let key in subsequences) {
//     if (subsequences[key].length > longest) {
//       longest = subsequences[key].length;
//     }
//   }
//   return longest;
// }

// No built-in JavaScript functions are used in this solution.
// // Optimized first approach
// // time complexity: O(n^2), space complexity: O(n)
function longestIncreasingSubsequence(arr) {
  let subsequence = [];
  let tempSubsequence = [];
  let startIndex = 0;

  while (startIndex < arr.length) {
    let prevValue = arr[startIndex];
    tempSubsequence = [arr[startIndex]];
    for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] > prevValue) {
        prevValue = arr[i];
        // Using spread (...) here causes O(n^3) time complexity due to repeated array copying
        // tempSubsequence = [...tempSubsequence, arr[i]];
        tempSubsequence[tempSubsequence.length] = arr[i];
      }
    }
    if (tempSubsequence.length > subsequence.length) {
      subsequence = tempSubsequence;
    }
    startIndex++;
  }

  return subsequence.length;
}

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60])); // Output: 5  (10, 22, 33, 50, 60)
console.log(longestIncreasingSubsequence([3, 10, 2, 1, 20])); // Output: 3  (3, 10, 20)
console.log(longestIncreasingSubsequence([50, 3, 10, 7, 40, 80])); // Output: 4  (3, 7, 40, 80) or (3, 10, 40, 80)...
console.log(longestIncreasingSubsequence([3, 2])); // Output: 1  (3 or 2)
console.log(longestIncreasingSubsequence([10, 20, 30, 40, 50])); // Output: 5  (10, 20, 30, 40, 50)
