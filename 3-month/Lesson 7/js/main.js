//? Form validation
const errorEl = document.querySelector("#error");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = [];

  if (name.value.length > 20) {
    errors.push("Name must be less than 20 characters");
  }

  if (password.value.length < 8) {
    errors.push("Password must be more than 8 characters");
  }

  if (errors.length > 0) {
    errorEl.textContent = errors.join(", ");
  } else {
    errorEl.textContent = "Successfully registered!";
  }
});

//? early return
//? Creating elements
//? setAttribute()
//? removeAttribute()
//? getAttribute()
//? setInterval() / clearInterval()
//? setTimeOut() / clearTimeout()
//? new Date()
//? padStart, padEnd
//? practice (toggle menu)
