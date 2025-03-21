// Question:
// Write an algorithm that moves all zeros to the end of the given array without changing the order of the other numbers.
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// First approach - with a new array
// time complexity: O(n), space complexity: O(n)
// function moveZerosToEnd(arr) {
//   let result = [];
//   let zeroCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       result[result.length] = arr[i];
//     } else {
//       zeroCount++;
//     }
//   }

//   while (zeroCount > 0) {
//     result[result.length] = 0;
//     zeroCount--;
//   }

//   return result;
// }

// No built-in JavaScript functions are used in this solution.
// Second approach - without a new array
// time complexity: O(n), space complexity: O(1)
function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[nonZeroIndex];
      arr[nonZeroIndex] = arr[i];
      arr[i] = temp;
      nonZeroIndex++;
    }
  }

  return arr;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZerosToEnd([0, 0, 1])); // [1, 0, 0]
console.log(moveZerosToEnd([1, 2, 3, 4])); // [1, 2, 3, 4] (No change)
console.log(moveZerosToEnd([0, 0, 0, 0])); // [0, 0, 0, 0] (No change)
console.log(moveZerosToEnd([1, 0, 2, 0, 3, 0, 4])); // [1, 2, 3, 4, 0, 0, 0]
