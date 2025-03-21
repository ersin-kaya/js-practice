// No built-in JavaScript functions are used in this solution.
// time complexity: O(n^2), space complexity: O(1)
// function longestOnesAfterFlip(arr) {
//   let longestOnesCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let flipped = false;
//     let tempCount = 0;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] === 0 && flipped) {
//         break;
//       }

//       if (arr[j] === 0 && !flipped) {
//         tempCount++;
//         flipped = true;
//       }

//       if (arr[j] === 1) {
//         tempCount++;
//       }
//     }
//     if (tempCount > longestOnesCount) {
//       longestOnesCount = tempCount;
//     }
//   }

//   return longestOnesCount;
// }

// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(1)
function longestOnesAfterFlip(arr) {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let longestOnesCount = 0;

  while (right < arr.length) {
    if (arr[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (arr[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    let windowLength = right - left + 1;
    if (windowLength > longestOnesCount) {
      longestOnesCount = windowLength;
    }

    right++;
  }

  return longestOnesCount;
}

console.log(longestOnesAfterFlip([1, 1, 0, 1, 1, 1])); // Output: 6 (flipping the 0 turns the whole array into 1s)
console.log(longestOnesAfterFlip([1, 0, 1, 0, 1])); // Output: 3 (there are two 0s, but you can flip only one)
console.log(longestOnesAfterFlip([0, 0, 0])); // Output: 1 (you can only flip one of them)
console.log(longestOnesAfterFlip([1, 1, 1, 1])); // Output: 4 (no 0s, already all 1s)
