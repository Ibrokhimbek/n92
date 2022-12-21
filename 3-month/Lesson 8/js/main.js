//? webkitSpeechRecognition
// const btn = document.querySelector("#btn");

// const recognition = new webkitSpeechRecognition();
// recognition.lang = "uz-UZ";
// recognition.continuous = false;

// btn.addEventListener("click", () => {
//   recognition.start();
// });

// const colors = {
//   qizil: "red",
//   sariq: "yellow",
//   yashil: "green",
// };

// recognition.onresult = (event) => {
//   document.body.style.background = colors[event.results[0][0].transcript]
//     ? colors[event.results[0][0].transcript]
//     : "white";
// };

//? for of  vs for in loop
// const arr = ["Abror", "Asror", "Axror", "Barbara"];
// for (val of arr) {
//   console.log(val);
// }

// const arr = [];

// const user = {
//   name: "Ibrohim",
//   surname: "Turaboev",
// };

// for of not for objects because objects are not iterable
// for (val of user) {
//   console.log(val);
// }

// for (key in user) {
//   const element = [];
//   element.push(key);
//   element.push(user[key]);
//   arr.push(element);
// }

// console.log(arr);

//? infinite loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//? Keydown
// document.addEventListener("keydown", function (event) {
//   console.log(event);
// });
//? Keyup
// document.addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     console.log("Enter bosildi");
//   }
// });
//? Keypress
// document.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     console.log("Enter bosildi");
//   }
// });

//* Amaliyot
// const input = document.querySelector("#search");

// document.addEventListener("keyup", (e) => {
//   if (e.key === "Q") {
//     input.focus();
//   } else if (e.key === "c" && e.ctrlKey) {
//     input.value = "";
//   }
// });

//? new Date()
// const hours = document.querySelector("#hours");
// const minutes = document.querySelector("#minutes");
// const seconds = document.querySelector("#seconds");
// let date = new Date();

// setInterval(() => {
//   date = new Date();
//   hours.textContent = date.getHours();
//   minutes.textContent = date.getMinutes();
//   seconds.textContent =
//     date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
// }, 1000);

// console.log(date.getMilliseconds());
// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());

//? padStart vs padEnd
// const str = "Hello world Pistonchi";
// console.log(str);
// console.log(str.padStart(30, "."));
// console.log(str.padEnd(50, "."));

//? Toggle menu
const toggleBtn = document.querySelector("#toggler");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
