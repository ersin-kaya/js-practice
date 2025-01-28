// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Error fetching data.");
//       }
//     }, 1000);
//   });
// };

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Rejected");
    resolve("Resolved");
  });
});

promise
  .then((value) => {
    console.log(value);
    throw new Error("there was an error");
    return value;
  })
  .then((secondValue) => {
    secondValue += " - 2";
    console.log(secondValue);
    return secondValue;
  })
  .catch((error) => {
    // console.log(error);
    console.log(error.message);
  });
