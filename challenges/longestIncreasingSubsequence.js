// No built-in JavaScript functions are used in this solution.
// // First approach
// // time complexity: O(n^2), space complexity: O(n^2)
function longestIncreasingSubsequence(arr) {
  let subsequences = {};
  let startIndex = 0;

  while (startIndex < arr.length) {
    let temp = arr[startIndex];
    for (let i = startIndex; i < arr.length; i++) {
      if (i === startIndex) {
        subsequences[startIndex] = [arr[i]];
      }
      if (arr[i] > temp) {
        temp = arr[i];
        subsequences[startIndex] = [...subsequences[startIndex], arr[i]];
      }
    }
    startIndex++;
  }

  let longest = 0;
  for (let key in subsequences) {
    if (subsequences[key].length > longest) {
      longest = subsequences[key].length;
    }
  }
  return longest;
}

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60])); // Output: 5  (10, 22, 33, 50, 60)
console.log(longestIncreasingSubsequence([3, 10, 2, 1, 20])); // Output: 3  (3, 10, 20)
console.log(longestIncreasingSubsequence([50, 3, 10, 7, 40, 80])); // Output: 4  (3, 7, 40, 80) or (3, 10, 40, 80)...
console.log(longestIncreasingSubsequence([3, 2])); // Output: 1  (3 or 2)
console.log(longestIncreasingSubsequence([10, 20, 30, 40, 50])); // Output: 5  (10, 20, 30, 40, 50)
