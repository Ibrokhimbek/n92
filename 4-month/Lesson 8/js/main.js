//? Destructuring
//* object
// const user = {
//   name: "Palonchi",
//   age: 199,
//   birthyear: 1822,
// };

// function myFunc({ name, birthyear }, num) {
//   // console.log(obj.name);
//   // const { name, birthyear } = obj;
//   console.log(name, birthyear, num);
// }

// myFunc(user, 18);

//* array
// const users = ["Sardor", "Shaxzod", "Ozod", "Abdulla"];

// const [user1, user2, user3] = users;

// function bla([user1, user2, user3, user4]) {
//   console.log(user4);
// }
// bla(users);
// console.log(user1);

//? Rest vs Spread operatorlari
//* Rest
// const users = ["Sardor", "Shaxzod", "Ozod", "Abdulla"];
// const [user1, ...otherUsers] = users;

// console.log(otherUsers);

// const user = { name: "Eshmat", surname: "Toshmatov", age: 42 };
// const { name, surname, ...others } = user;

// console.log(others);

//* Spread
// const user = { name: "Eshmat", surname: "Toshmatov", age: 42 };

// const user2 = { id: 1, ...user };

// console.log(user);
// console.log(user2);

// const users = ["Sardor", "Shaxzod", "Ozod", "Abdulla"];

// const users2 = [...users, "Mishkabek", "SDDbek"];

// console.log(users);
// console.log(users2);

//? Shallow copy vs Deep copy
//* Shallow copy
// const user = { name: "Eshmat", surname: "Toshmatov", age: 42 };

// const user2 = user;
// user2.name = "Palonchi";

// console.log(user);
// console.log(user2);

//* Deep copy
// const user = {
//   friends: { name: "Palonchi" },
//   name: "Eshmat",
//   surname: "Toshmatov",
//   age: 42,
// };
// const user2 = { ...user.friends };
// user.name = "Mishkabek";
// user2.name = "Palonchi";

// console.log(user);
// console.log(user2);

//? push method
// function myPush(arr, ...data) {
//   const arr2 = [...arr, ...data];
//   return arr2;
// }

// console.log(myPush([1, 2, 3], "Ibrohim", "Ismoil"));

//? spread amaliyot
// const users = [
//   { id: 1, name: "Sardor", age: 20 },
//   { id: 2, name: "Abdulla", age: 20 },
//   { id: 3, name: "Ozod", age: 20 },
//   { id: 4, name: "Shaxzod", age: 20 },
// ];

// function workOnData(arr) {
//   const result = [];
//   users.forEach((user) => {
//     result.push({
//       ...user,
//       status: "Student",
//     });
//   });

//   return result;
// }

// console.log(workOnData(users));
