// Question: Anagram Check
// 📌 Write a function that checks whether two strings are anagrams of each other.
// 🔹 Anagram: Words that contain the same letters but in a different order.
// 🔹 Example: "listen" and "silent" are anagrams.
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// First approach
// time complexity: O(n^3), space complexity: O(1)
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (let i = 0; i < str1.length; i++) {
//     let currentCharCountStr1 = 0,
//       currentCharCountStr2 = 0;

//     for (let j = 0; j < str1.length; j++) {
//       if (str1[i] === str1[j]) {
//         currentCharCountStr1++;
//       }
//     }

//     for (let k = 0; k < str2.length; k++) {
//       if (str1[i] === str2[k]) {
//         currentCharCountStr2++;
//       }
//     }

//     if (currentCharCountStr1 !== currentCharCountStr2) {
//       return false;
//     }
//   }

//   return true;
// }

// No built-in JavaScript functions are used in this solution.
// Second approach
// time complexity: O(n), space complexity: O(n)
// let myObject = { a: 3 };
// console.log(myObject["a"]);
// myObject["b"] = 1;
// myObject["b"] = (myObject["b"] || 0) + 10;
// console.log(myObject["b"]);
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount1 = {};
  let charCount2 = {};

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];

    charCount1[char1] = (charCount1[char1] || 0) + 1;
    charCount2[char2] = (charCount2[char2] || 0) + 1;
  }

  for (let key in charCount1) {
    if (charCount1[key] !== charCount2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("test", "ttew"));
