//? callback functions
// const btn = document.querySelector("#click");

// btn.addEventListener("click", function () {
//   console.log("Hello");
// });

// function clicker() {
//   console.log("Hello world");
// }
// clicker()

// function callbackHandler(firstname, birthyear, callback) {
//   const currentYear = new Date().getFullYear();
//   const template = `${firstname} bu yil ${currentYear - birthyear} yoshda!`;
//   const returnedData = callback(template);
//   console.log(returnedData);
//   return firstname + " " + birthyear;
// }

// const data = callbackHandler("Abdujalil", 2004, function (mytemplate) {
//   console.log(mytemplate);
//   return "Hello world";
// });

// console.log(data);

AOS.init({
  disable: "phone",
  offset: 400,
  delay: 200,
  duration: 500,
});
