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
//? RegExp(), ASCII - American Standard Code for Information Interchange
//? Keydown
//? Keyup
//? Kuypress
