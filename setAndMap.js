// Set
console.log(`
    __________ Set __________
    `);

const uniqueNums = new Set([1, 2, 3, 3, 2, 1, 4]);
for (let num of uniqueNums) {
  console.log(num);
}

// Map
console.log(`
    __________ Map __________
    `);

const myMap = new Map();
myMap.set("key", "value");
myMap.set(42, "forty two");
myMap.set({ id: 4, date: Date.now() }, "an object key");

console.log(myMap.get("key"));
console.log(myMap.has(42));
console.log(myMap.delete("key"));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.clear()); // undefined
console.log(myMap);

// Object.entries => Map
const obj = { a: 11, b: 22 };
console.log(Object.entries(obj));

const map = new Map(Object.entries(obj));
console.log(map.get("a"));
