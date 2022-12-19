//? Form validation
// const errorEl = document.querySelector("#error");
// const name = document.querySelector("#name");
// const password = document.querySelector("#password");
// const form = document.querySelector("#form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const errors = [];

//   if (name.value.length > 20) {
//     errors.push("Name must be less than 20 characters");
//   }

//   if (password.value.length < 8) {
//     errors.push("Password must be more than 8 characters");
//   }

//   if (errors.length > 0) {
//     errorEl.textContent = errors.join(", ");
//   } else {
//     errorEl.textContent = "Successfully registered!";
//   }
// });

//? early return
// function sum(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return undefined;
//   } else {
//     return a + b;
//   }
// }

// console.log(sum(6, 5));
//? Creating elements
// const h2 = document.createElement("h2");
// h2.textContent = "Hello world!";
// h2.classList.add("hello");
// document.body.appendChild();
// document.body.prepend(h2);

//? setAttribute()
// const btnEl = document.querySelector("#clicker");

// btnEl.addEventListener("click", () => {
//   document.querySelector("#checker").setAttribute("checked", true);
// });

// btnEl.setAttribute("disabled", null);
//? removeAttribute()
// document.querySelector("#clicker").removeAttribute("disabled");
//? getAttribute()
// const data = document.querySelector("#clicker").getAttribute("title");
// console.log(data);
//? setTimeOut() / clearTimeout()
// const timer = setTimeout(function () {
//   document.querySelector("#clicker").removeAttribute("disabled");
// }, 5000);

// document.querySelector("#cleaner").addEventListener("click", () => {
//   clearTimeout(timer);
// });
//? setInterval() / clearInterval()
// const time = setInterval(() => {
//   console.log("2 sekund o'tti");
// }, 1);

// document.querySelector("#cleaner").addEventListener("click", () => {
//   clearInterval(time);
// });

//* Amaliyot
