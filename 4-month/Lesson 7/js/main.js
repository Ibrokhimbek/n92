//? Sync vs Async
// function myFunc() {
//   console.log(1);
// }

// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(4);

// myFunc();

//? Promise
//* 1. Pending
//* 2. Fullfilled
//* 3. Rejected
// const myPromise = new Promise((resolve, reject) => {
//   if (1 == 1) {
//     resolve("Hello world");
//   } else {
//     reject("Error");
//   }
// });

// myPromise.then((res) => console.log(1)).catch((err) => console.log(err));

// console.log(2);

//? Fetch => by default GET request
// fetch("http://xolisnazar.uz/api/index/currency")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
