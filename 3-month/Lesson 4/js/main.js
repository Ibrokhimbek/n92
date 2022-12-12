//? Data structure => Array

// const array = [
//   { name: "Pistonchi" },
//   ["Hello", "Salom", "Guten abend", "Gute nacht"],
//   2912912,
//   "Sobir",
//   "Qodir",
//   true,
//   NaN,
//   null,
//   undefined,
//   function () {
//     console.log("Hello world");
//   },
// ];
// console.log(array.length);

// const user = {
//   name: "Pistonchi",
//   friends: ["Botir", "Sobir", "Qodir"],
// };
// console.log(user.friends[1]);
// user.name;
// user["name"];

//* Arrayga yangi ma'lumot qo'shish
// let arr = [1, 2, 3, 4];
// arr = { name: "Palonchi" };
// arr[9] = "Hello";
// console.log(arr);
// console.log(arr[5]);

// let users = [];

// users[users.length] = "Ibrohim";
// users[users.length] = "Ismoil";
// users[users.length] = "Abbos";

// console.log(users);

//* Amaliyot
// const names = [];

// function addUsers() {
//   const username = prompt("Enter your name:");
//   names[names.length] = username;
//   console.log(names);
// }

//? Logical and (&&) vs or (||)

// const cola = false;
// const pepsi = false;

// if (cola && pepsi) {
//   console.log("Xechnima olmayman");
// } else if (cola || pepsi) {
//   console.log("Pepsidan 2 ta olaman");
// } else {
//   console.log("Boshqa magazinga boraman");
// }

// const user = {
//   name: "ko'chinskiy",
//   password: 0000,
// };

// const username = prompt("Enter your username:");
// const password = prompt("Enter your password");

// if (username == user.name || password == user.password) {
//   console.log("Welcome to the website!");
// } else {
//   console.log("Ko'chenga yo'qol");
// }

//? return in functions
function sum(x, y) {
  const result = x + y;
  return result;
}

const num = sum(328923, 9332232);
const num2 = sum(90, 70);

console.log(num2);
