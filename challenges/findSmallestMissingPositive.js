// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(n)
function findSmallestMissingPositive(arr) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    seen[arr[i]] = true;
  }

  let number = 1;

  while (true) {
    if (!seen[number]) {
      return number;
    }
    number++;
  }
}

console.log(findSmallestMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(findSmallestMissingPositive([1, 2, 0])); // Output: 3
console.log(findSmallestMissingPositive([7, 8, 9, 11, 12])); // Output: 1
console.log(findSmallestMissingPositive([2, 1, 4, 6, 5])); // Output: 3
console.log(findSmallestMissingPositive([-5, -1, -2, 0])); // Output: 1
