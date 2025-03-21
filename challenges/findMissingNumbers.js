// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(n)
function findMissingNumbers(arr) {
  let result = [];
  let seen = {};
  let n = arr.length;
  let value = 1;

  for (let i = 0; i < n; i++) {
    seen[arr[i]] = true;
  }

  while (value <= n) {
    if (!seen[value]) {
      result[result.length] = value;
    }
    value++;
  }

  return result;
}

console.log(findMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
console.log(findMissingNumbers([1, 1])); // Output: [2]
console.log(findMissingNumbers([2, 2])); // Output: [1]
console.log(findMissingNumbers([1, 2, 3, 4, 5])); // Output: []
