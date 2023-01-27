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
