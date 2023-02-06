//? OOP
// class User {
//   #privateMember;
//   constructor(name, age) {
//     this.id = Math.floor(Math.random() * 99999);
//     this.name = name;
//     this.age = age;
//     this.#privateMember = "Salom dunyo";
//   }

//   get showAge() {
//     return this.age;
//   }

//   set setAge(age) {
//     this.age = age;
//   }

//   showFullName() {
//     return this.name;
//   }
// }

// class Admin extends User {
//   constructor(name, age) {
//     super(name, age);
//     this.status = "admin";
//   }

//   static getSmth() {
//     return this.status;
//   }
// }

// const MyAdmin = new Admin("Ibrohim", 20);

// MyAdmin.name = "Xushnud";
// MyAdmin.privateMember = "Blbabl";
// MyAdmin.setAge = 30;

// console.log(MyAdmin);

// console.log(Admin.getSmth());

//? call, apply, bind
// const user = {
//   name: "Palonchi",
//   showName(text, num) {
//     console.log(text + " " + num + " " + this.name);
//   },
// };

// const admin = {
//   name: "Adminbek",
// };

// user.showName("Salom", 29);

// user.showName.call(admin, "Salom", 20);
// user.showName.apply(admin, ["Hello", 40]);
// user.showName.bind(admin)("Hallo!", 60);
