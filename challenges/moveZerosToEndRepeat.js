// Question:
// Write an algorithm that moves all zeros to the end of the given array without changing the order of the other numbers.
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(1)
// ! prevented unnecessary swap operations !
function moveZerosToEndRepeat(arr) {
  let left = 0;
  let right = 0;
  let temp;

  while (right < arr.length) {
    if (arr[left] !== 0) {
      left++;
      right++;
    }

    if (arr[right] !== 0 && arr[left] === 0) {
      temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      left++;
    }
    right++;
  }
  return arr;
}

console.log(moveZerosToEndRepeat([0, 1, 0, 3, 12])); // ➞ [1, 3, 12, 0, 0]
console.log(moveZerosToEndRepeat([1, 2, 0, 0, 4, 5])); // ➞ [1, 2, 4, 5, 0, 0]
console.log(moveZerosToEndRepeat([0, 0, 0, 0])); // ➞ [0, 0, 0, 0]
console.log(moveZerosToEndRepeat([4, 5, 6])); // ➞ [4, 5, 6]
console.log(moveZerosToEndRepeat([1, 2, 3])); // ➞ [1, 2, 3]
console.log(moveZerosToEndRepeat([0, 0, 0])); // ➞ [0, 0, 0]
console.log(moveZerosToEndRepeat([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZerosToEndRepeat([0, 0, 1])); // [1, 0, 0]
console.log(moveZerosToEndRepeat([1, 2, 3, 4])); // [1, 2, 3, 4] (No change)
console.log(moveZerosToEndRepeat([0, 0, 0, 0])); // [0, 0, 0, 0] (No change)
console.log(moveZerosToEndRepeat([1, 0, 2, 0, 3, 0, 4])); // [1, 2, 3, 4, 0, 0, 0]
