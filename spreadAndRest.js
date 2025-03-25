// Spread
console.log(`
    __________ Spread __________
    `);

const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums);

const job = { name: "Software Developer", salary: "5000" };
const job2 = { ...job, rating: "6/10" };
console.log(job2);

// Rest
console.log(`
    __________ Rest __________
    `);

function sum(...args) {
  return args.reduce((acc, number) => acc + number, 0);
}
console.log(sum(10, 20, 30));
