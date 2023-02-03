//? Class
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   addUser() {
//     const arr = JSON.parse(localStorage.getItem("users")) || [];
//     arr.push(this);
//     localStorage.setItem("users", JSON.stringify(arr));
//   }
// }

// const Ibrohim = new User("Ibrohim", 20);
// const Abror = new User("Abror", 15);

// Ibrohim.addUser();
// Abror.addUser();

// console.log(new User());

//? Prototype
// Array.prototype.findThird = function () {
//   return this[2];
// };

// Array.prototype.push = function () {
//   return "Lalaku";
// };

// const arr = [12, 3, 34];

// console.log(arr.push());

// console.log(arr);

// console.log(arr.findThird());

// class MyStorage {
//   pushItem(key, item) {
//     const data = this.getItem(key);
//     const newArr = [...data, item];
//     this.setItem("nums", newArr);
//   }

//   setItem(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }

//   getItem(key) {
//     return JSON.parse(localStorage.getItem(key));
//   }
// }

// const Storage = new MyStorage();

// const arr = [1, 2, 3, 4, 5];

// Storage.setItem("nums", arr);
// console.log(Storage.getItem("nums"));

// Storage.pushItem("nums", {
//   id: 1,
//   name: "Ibrohim",
// });
