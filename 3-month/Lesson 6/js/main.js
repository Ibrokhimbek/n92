//? Array methods
//* concat()
// const arr = ["Jasur", "Laylo", "Sevinch", "Userbek", "Mishkabek"];
// const newArr = arr.concat(
//   [1, 2, 3, 4, 5],
//   ["Tal'at", "Gulchapchap"],
//   "Ibrohim",
//   { name: "Asqar" }
// );
// console.log(newArr);
// console.log(arr.concat([1, 2, 3, 4, 5]));
//* join()
// const arr = ["Jasur", "Laylo", "Sevinch", "Userbek", "Mishkabek"];
// const newStrArr = arr.join(" ");
// console.log(newStrArr);
//* slice()
// const arr = ["Jasur", "Laylo", "Sevinch", "Userbek", "Mishkabek"];
// const newArr = arr.slice(1, 3); ["Laylo", "Sevinch"]
// const newArr2 = arr.slice(1); ["Laylo", "Sevinch", "Userbek", "Mishkabek"]
// console.log(arr.slice(1, 2));
//* indexOf()
// const arr = ["Jasur", "Laylo", "Sevinch", "Userbek", "Laylo", "Mishkabek"];
// console.log(arr.indexOf("Laylo"));
//* includes()
// const arr = ["Jasur", "Laylo", "Sevinch", "Userbek", "Laylo", "Mishkabek"];
// console.log(arr.includes("Sevinch"));
// console.log(arr.includes("sevinch"));

//? String methods
//* substring()
// const str = "Ibrohim";
// const newStr = str.substring(0, 3);
// const newStr2 = str.substring(0);
// console.log(newStr);
//* search()
// const str = "Qambar maktabdan katta besh olib keldi";
// const isFound = str.search("katta");
// console.log(str.substring(isFound));
//* charAt()
// const str = "Ibrohim";
// console.log(str.charAt(0));
//* match()
// const str = "Ibrohim";
// console.log(str.match("Ibrohim"));
//* split()
// const str = "Qambar-maktabdan-katta besh-olib-keldi";
// console.log(str.split(" "));

//? selecting elements from html
// const textEl = document.getElementById("text");
// const textEl2 = document.querySelector("#text");
// const captionEl = document.querySelector(".caption");
// const captionEl2 = document.querySelector("h2");

// const captionEls = document.querySelectorAll(".caption");
// const captionEls2 = document.querySelectorAll("#text");
// const captionEls3 = document.querySelectorAll("h2");
// console.log(captionEls3);

//? isNaN()
// const result = "Ibrohim" - 345;
// console.log(isNaN(result));
