// No built-in JavaScript functions are used in this solution.

// First approach - time complexity: O(n^3)
// Not optimized
// function findPairs(arr, target) {
//   let resultArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         let newArr = [arr[i], arr[j]];

//         let alreadyExists = false;
//         for (let k = 0; k < resultArr.length; k++) {
//           if (resultArr[k][0] === newArr[0] && resultArr[k][1] === newArr[1]) {
//             alreadyExists = true;
//             break;
//           }
//         }

//         if (!alreadyExists) {
//           resultArr[resultArr.length] = newArr;
//         }
//       }
//     }
//   }
//   return resultArr;
// }

// Second approach - time complexity: O(n)
function findPairs(arr, target) {
  let seen = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (seen[complement] === true) {
      result[result.length] = [complement, arr[i]];
      seen[complement] = false;
    }

    if (seen[arr[i]] === undefined) {
      seen[arr[i]] = true;
    }
  }
  return result;
}

console.log(findPairs([1, 2, 3, 4, 5], 6)); // Output: [[1, 5], [2, 4]]

console.log(findPairs([2, 4, 3, 7, 5, 8], 10)); // Output: [[2, 8], [3, 7]]

console.log(findPairs([1, 1, 1, 2, 2, 3, 4], 3)); // Output: [[1, 2]]

console.log(findPairs([0, -1, 2, -3, 1], -2)); // Output: [[-3, 1]]
