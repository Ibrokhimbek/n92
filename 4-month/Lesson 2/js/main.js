//? sort
// const users = [
//   "Jasur",
//   "Abdulla",
//   "Ravshan",
//   "Azizbek",
//   "Timur",
//   "Dilshodbek",
//   "Userbek",
//   "Mishkabek",
//   "Eshmat",
//   "Toshmat",
//   "Maraymamat",
// ];
// const newUsers = users.sort();

// const nums = [10, 6, 4, 3, 2, 7, 1, 8, 9, 5, 11, 17, 24, 29];

// nums.sort((a, b) => {
//   // return a-b; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 24, 29]
//   // return b-a; [29, 24, 17, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// });

// console.log(nums);

//? some
// const arr = [1, 5, 3, 5, 7, 0];

// const result = arr.some((element) => {
//   return element === 0;
// });

// console.log(result);

//? every
// const arr = [1, 5, 3, 5, 7];

// const result = arr.every((element) => {
//   return element !== 0;
// });

// console.log(result);
//? Global scope
const username = "Ibrohim";

function sayName() {
  //? function/local scope
  const lalaku = "Lalaku";
}

//? block scope
{
  var todo = "Mushukka ovqat berish";
}

console.log(todo);

// let val = null;

if (!0) {
  var user = "Botir";
  // val = user;
}

console.log(user);
