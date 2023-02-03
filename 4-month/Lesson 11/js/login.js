// const loginForm = document.querySelector("#login__form");

// function myFetch(url, { method, body }) {
//   return new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest();

//     req.open(method, url, true);

//     req.responseType = "json";

//     req.setRequestHeader("Content-Type", "application/json");
//     req.setRequestHeader("Access-Control-Allow-Origin", "*");

//     req.onload = function (event) {
//       resolve(req.response);
//     };

//     req.onerror = function (event) {
//       reject("Error");
//     };

//     req.send(JSON.stringify(body));
//   });
// }

// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const body = {
//     email: event.target[0].value,
//     password: event.target[1].value,
//   };

//   // myFetch("https://reqres.in/api/login", {
//   //   method: "POST",
//   //   body,
//   // })
//   //   .then((res) => {
//   //     localStorage.setItem("token", JSON.stringify(res.token));
//   //     window.location.replace("index.html");
//   //   })
//   //   .catch((err) => console.log(err));

//   fetch("https://reqres.in/api/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (!res.error) {
//         localStorage.setItem("token", JSON.stringify(res.token));
//         window.location.replace("index.html");
//       } else {
//         alert("Error!");
//       }
//     })
//     .catch((err) => console.log(err));
// });

// const user = {
//   name: "Ibrohim",
//   surname: "Turaboev",
// };

// function myCalc(a, b) {
//   return a + b;
// }

// export default user;
// export { myCalc };
