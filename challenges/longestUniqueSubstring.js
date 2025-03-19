// Not optimized
function longestUniqueSubstring(str) {
  let substrings = [];
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    substrings[index] = (substrings[index] || "") + str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] !== str[j] && str[j] !== str[j + 1]) {
        substrings[index] += str[j];
      } else {
        break;
      }
    }
    index++;
  }

  let longestUniqueSubstringLength = 0;
  // // for .. in
  // for (let key in substrings) {
  //   if (substrings[key].length > longestUniqueSubstringLength) {
  //     longestUniqueSubstringLength = substrings[key].length;
  //   }
  // }

  // // for .. of
  for (let substring of substrings) {
    if (substring.length > longestUniqueSubstringLength) {
      longestUniqueSubstringLength = substring.length;
    }
  }
  console.log(longestUniqueSubstringLength);
}

longestUniqueSubstring("abcabcbb"); // Output: 3
longestUniqueSubstring("bbbbb"); // Output: 1
longestUniqueSubstring("pwwkew"); // Output: 3
longestUniqueSubstring(""); // Output: 0
longestUniqueSubstring("abcdef"); // Output: 6
longestUniqueSubstring("aab"); // Output: 2
longestUniqueSubstring("dvdf"); // Output: 3
longestUniqueSubstring("abba"); // Output: 2
