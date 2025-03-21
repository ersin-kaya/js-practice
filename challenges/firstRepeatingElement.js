// Question:
// Write an algorithm to find the first repeating element in a given array.
// That is, you should return the first number that has already been seen before.
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(n)
function firstRepeatingElement(arr) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return arr[i];
    }
    seen[arr[i]] = true;
  }

  return null;
}

console.log(firstRepeatingElement([1, 2, 3, 4, 2, 5])); // Output: 2
console.log(firstRepeatingElement([5, 1, 3, 4, 3, 5, 6])); // Output: 3
console.log(firstRepeatingElement([1, 2, 3, 4, 5])); // Output: null (No repeating elements)
console.log(firstRepeatingElement([7, 8, 8, 9, 10])); // Output: 8
