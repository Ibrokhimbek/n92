//? var => let, const
// var x = 4;
// console.log(window);

// var user = {
//   name: "Abbos",
// };

// user.age = 14;

// var location = "Hello";

// console.log(window);

//* let vs const
// var variableName = "value";
// variableName = 2

// let x = "value";
// x = 5;
// console.log(x);

// const pi = 3.14;
// pi = 3;
// console.log(pi);

//? confirm
// const isApproved = confirm("Do you really want to delete it?");
// console.log(isApproved);

//? Truethy vs Falsy values
//! Falsy values
//* 0, "", null, undefined, NaN, false
// if (0) {
//   console.log("Hello");
// } else {
//   console.log("This is NaN");
// }

//* Amaliyot
// const text = prompt("Enter text:");

// if (text) {
//   alert(text);
// } else if (text === "Hello") {
//   alert("Hello yozildi");
// } else {
//   alert("Bo'sh string");
// }

//? DOM => Document object model
// console.log(window);

//? Functions

// const username = prompt("Enter your username:");

// function sayHello(name = "Noma'lum") {
//   if (name) {
//     alert(`Assalomu alaykum ${name} aka!`);
//   } else {
//     alert("Assalamu alaikum hurmatli mijoz!");
//   }
// }

// sayHello();

//* Amaliyot
// function clicker(num) {
//   const firstname = prompt("Enter your firstname:");
//   alert("Hello " + firstname + " " + num);
// }

//* Amaliyot
const firstNum = Number(prompt("Enter first number:"));
const secondNum = Number(prompt("Enter second number:"));

function sum(x, y) {
  alert(x + y);
}

sum(firstNum, secondNum);
