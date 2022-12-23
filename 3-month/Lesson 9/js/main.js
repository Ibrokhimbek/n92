//? dataset
// const todos = document.querySelectorAll(".todo");
// console.dir(todos[0].dataset.name);

//? this
// const user = {
//   name: "Ibrohim",
//   username: "Turaboev",
//   age: 20,
//   fullname: function () {
//     console.log(this);
//     return this.name + " " + this.username;
//   },
// };

// console.log(user.fullname());

//? this on elements
// const todos = document.querySelectorAll(".todo");
// for (let i = 0; i < todos.length; i++) {
//   todos[i].addEventListener("click", function () {
//     this.style.background = "red";
//   });
// }

//? Todo
const todoForm = document.querySelector("#todoForm");

const todosArr = [];

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoCaption = event.target[0].value;

  const todo = {
    id: uuidv4(),
    task: todoCaption,
    isCompleted: false,
    isEditing: false,
  };

  todosArr.push(todo);
  console.log(todosArr);
});
