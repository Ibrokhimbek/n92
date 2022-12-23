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
const cards = document.querySelector("#cards");

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
  render();
  event.target[0].value = "";
  console.log(todosArr);
});

function render() {
  cards.innerHTML = "";
  for (let i = 0; i < todosArr.length; i++) {
    const template = `
      <div class="col-md-3 p-3 bg-light rounded">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
          />
          <label class="form-check-label" for="flexSwitchCheckChecked"
            >${todosArr[i].task}</label
          >
          <div class="d-flex justify-content-end gap-3 mt-3">
            <button
              class="btn btn-warning"
              type="button"
              id="edit_btn"
              data-id="${todosArr[i].id}"
            >
              <i class="fas fa-pen"></i>
            </button>
            <button class="btn btn-danger" type="button" id="delete_btn" data-id="${todosArr[i].id}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>`;

    cards.innerHTML = cards.innerHTML + template;
  }
}
