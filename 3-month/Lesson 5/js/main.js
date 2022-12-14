//? v 1.0.0 => Uyga vazifa
// const signUpBtn = document.getElementById("btn__signUp");
// const signInBtn = document.getElementById("btn__signIn");

// const user = {
//   name: null,
//   password: null,
// };

//* 1. adding functions to the button
// signUpBtn.onclick = function () {
//   //* 2. asking questions from the user
//   const username = prompt("Enter your username:");
//   const password = prompt("Enter your password:");

//   //* 3. adding data into the database
//   user.name = username;
//   user.password = password;

//   //* 4. giving info to the user
//   alert("Successfully sign up!!!");
//   console.log(user);
// };

//* 1. adding functions to the button
// signInBtn.onclick = function () {
//   if (user.name && user.password) {
//     //* 2. asking questions from the user
//     const username = prompt("Enter your username:");
//     const password = prompt("Enter your password:");
//     if (user.name === username && user.password === password) {
//       alert("Welcome to the website!");
//     } else {
//       alert("Your data is incorrect!");
//     }
//   } else {
//     alert("Please, create new account!");
//   }
// };

//? not in comparison
// if (!true) {
//   console.log(1);
// } else {
//   console.log(2);
// }
// if (4 !== 4) {
//   console.log(1);
// } else {
//   console.log(2);
// }

//? ternary operator
// const ism = prompt("Ismingizni kiriting!");

// let username = ism ? ism : "Hurmatli mijoz";

// if (ism) {
//   username = ism;
// } else {
//   alert("Ism kirgizmadingiz");
// }

// console.log(username);

//? for loop
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

//? loops with arrays
// const arr = [
//   "Ibrohim",
//   "Akmal",
//   "Mirbosit",
//   "Jasur",
//   "Abdulhamid",
//   "Abdulloh",
//   "Abdulla",
//   "Mishkabek",
//   "Abdulloh",
// ];

// const username = prompt("Username");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === username) {
//     alert(`Bu ism ${i}chi tartibda ro'yxatda mavjud `);
//   }
// }

//? Array methods => push, pop, unshift, shift
// const arr = [1, false, 3, undefined, 5, 6];
//* push()
// const returnedData = arr.push("Ibrohim", 12, 12, 12, 12);
// console.log(returnedData);
//* pop()
// const data = arr.pop();
// console.log(arr);
// console.log(data);

//* unshift()
// const data = arr.unshift("Ibrohim", "Ismoil");
//* shift()
// const data = arr.shift();
// const data2 = arr.shift();
// console.log(arr);
// console.log(data2);
