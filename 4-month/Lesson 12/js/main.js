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

//? Contructor function
// function Admin(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const MyAdmin = new Admin("IsomTv", 25);
// const SecondAdmin = new Admin("Adminbek", 24);

// Admin.prototype.info = function () {
//   return this.name;
// };

// console.log(SecondAdmin.info());
// console.log(MyAdmin.info());

//? Amaliyot
const todos = JSON.parse(localStorage.getItem("todos")) || [];

class Todo {
  constructor(task) {
    this.id = todos[todos.length - 1]?.id + 1 || 0;
    this.task = task;
    this.isCompleted = false;
    this.isEditing = false;
  }

  save() {
    todos.push(this);
  }

  static fetchAll(cb) {
    cb(todos);
  }

  static findById(id, cb) {
    const foundTodo = todos.find((item) => item.id == id);
    cb(foundTodo);
  }
}

const myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = new Todo(event.target[0].value);
  todo.save();
  console.log(todos);
});

Todo.fetchAll((data) => {
  
});

Todo.findById(2, (todo) => {

})
