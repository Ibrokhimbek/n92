//? while
// let i = 1;
// const arr = [];

// while (arr.length !== 5) {
//   arr.push(i);
// }

// console.log(arr);

//? findIndex
// const arr = ["Usmon", "Yusuf", "Userbek", "Mishkabek"];

// console.log(arr.findIndex((name) => name === "Yusuf")); // 1 => position
// console.log(arr.findIndex((name) => name === "Lolabek")); // -1

//? JSON => JavaScript Object Notation
// const user = {
//   name: "Userbek",
//   age: 199,
//   gender: "neutral",
// };

// console.log(user);

// const stringUser = JSON.stringify(user);

// console.log(JSON.parse(stringUser));

//? localStorage, cookie storage, session storage
// localStorage.setItem(
//   "users",
//   JSON.stringify({
//     name: "Userbek",
//     age: 199,
//   })
// );

// console.log(JSON.parse(localStorage.getItem("users")));

//? Amaliyot
const formEl = document.querySelector("#form");

let users = JSON.parse(localStorage.getItem("users")) || [];

render();

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  users.push(event.target[0].value);
  event.target[0].value = "";
  render();
});

function render() {
  localStorage.setItem("users", JSON.stringify(users));
  document.querySelector("#users").innerHTML = users.join(", ");
}

// localStorage.clear(); // deletes all items in localStorage

// localStorage.removeItem("users");
