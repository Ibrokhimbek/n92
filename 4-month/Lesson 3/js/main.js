//? reduce
// const array = [1, 2, 3, 4, 5];

// const result = arr.reduce((prev, curr, idx, arr) => {
//   return prev + curr;
// }, 0);
// console.log(result);

// function myReducer(arr, cb, initVal) {
//   let prev = initVal ? initVal : arr[0];

//   for (let i = initVal ? 0 : 1; i < arr.length; i++) {
//     prev = cb(prev, arr[i], i, arr);
//   }

//   return prev;
// }

// console.log(
//   myReducer(array, (prevVal, currVal, index, arr) => {
//     return prevVal + currVal;
//   })
// );

//? break vs continue

// const nums = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < nums.length; i++) {
//   // if (nums[i] % 2 === 0) continue;
//   if (nums[i] % 2 === 0) break;
//   console.log(nums[i]);
// }
