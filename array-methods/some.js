// q1: create a campaign if the user has purchased multiple units of the same item, and apply a 20% discount to those items
const PERCENT_BASE = 100;
let cartTotal = 0;
let discountedItemCount = 0;
let discountedTotal = 0;
let discountPercent = 20;
const q1CartItems = [
  { id: 1, name: "Wireless Mouse", quantity: 1, price: 100 },
  { id: 2, name: "USB-C Cable", quantity: 3, price: 50 },
  { id: 3, name: "Laptop Stand", quantity: 2, price: 300 },
];

for (let { quantity, price } of q1CartItems) {
  let itemTotal = price * quantity;
  cartTotal += itemTotal;

  if (quantity > 1) {
    discountedTotal +=
      (itemTotal * (PERCENT_BASE - discountPercent)) / PERCENT_BASE;
    discountedItemCount++;
  } else {
    discountedTotal += itemTotal;
  }
}

console.log("Cart total: ", cartTotal);

const hasCampaign = q1CartItems.some((item) => item.quantity > 1);
if (hasCampaign) {
  console.log("Discount: ", cartTotal - discountedTotal);
  console.log("Discounted Total: ", discountedTotal);
  let productLabel = `product${discountedItemCount > 1 ? "s" : ""}`;
  console.log(
    `${discountPercent}% discount on multi-quantity products!\n` +
      `Campaign applied for ${discountedItemCount} ${productLabel}`
  );
} else {
  console.log("No campaign applied");
}

console.log("________________________________________________________________");

//
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("Has even number: ", hasEven);

//
const oddNumbers = numbers.filter((num) => num % 2 === 1);
const hasEven2 = oddNumbers.some((num) => num % 2 === 0);
console.log("Has even number: ", hasEven2);

//
const cartItems = [
  {
    name: "T-shirt",
    price: 150,
    discounted: false,
  },
  { name: "Shoes", price: 300, discounted: true },
];
const hasDiscount = cartItems.some((item) => item.discounted);
console.log("Cart has discount: ", hasDiscount);

// array of objects
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
];
const anyActive = users.some((user) => user.active);
console.log("Any active user: ", anyActive);

// using index and array
console.log("____using index and array____");
const nums = [10, 20, 30];
nums.some((value, index, array) => {
  console.log(`Index: ${index}, value: ${value}, array: ${array} `);
  return false;
});

// thisArg
// some(fn, thisArg) : sets the "this" value inside the fn function to "thisArg"
console.log("____thisArg____some(fn, thisArg)____");
const ageCheck = {
  min: 18,
  max: 80,
};
const ages = [12, 16, 83];
function isRightAge(age) {
  console.log(`age: ${age}, this: ${this}`);
  return age >= this.min && age <= this.max;
}
const result = ages.some(isRightAge, ageCheck);
console.log("Is any age valid: ", result);
console.log("________________________________________________________________");
