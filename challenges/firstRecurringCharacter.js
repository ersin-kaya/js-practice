function firstRecurringCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) {
        return str[i];
      }
    }
  }
  return null;
}

console.log(firstRecurringCharacter("ABCA"));
console.log(firstRecurringCharacter("BCABA"));
console.log(firstRecurringCharacter("ABCDE"));
