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
const todoTogglers = document.querySelectorAll("#todoRadio");

let todosArr = [];

render();

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoCaption = event.target[0].value;

  const todo = {
    id: todosArr[todosArr.length - 1]?.id + 1 || 0,
    task: todoCaption,
    isCompleted: false,
    isEditing: false,
  };

  todosArr.push(todo);
  render();
  event.target[0].value = "";
});

function render() {
  cards.innerHTML = "";
  for (let i = 0; i < todosArr.length; i++) {
    const todo = todosArr[i];
    const template = todo.isEditing
      ? ` <form class="col-md-3 p-3 rounded bg-light" id="editForm" onsubmit="return editTodo(event, ${todo.id})">
            <input type="text" value="${todo.task}" class="w-100" />
            <div class="d-flex justify-content-end pt-3">
              <button
              class="btn btn-warning"
              type="submit"
              id="save"
              >
                <i class="fas fa-floppy-disk"></i>
              </button>
            </div>
          </form>`
      : `
      <div class="col-md-3 p-3 ${
        todo.isCompleted ? "bg-success text-light" : "bg-light"
      } rounded">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="${todo.id}"
            onchange="toggleCompleted(${todo.id})"
            ${todo.isCompleted ? "checked" : ""}
          />
          <label class="form-check-label" for="${todo.id}"
            >${todo.task}</label
          >
          <div class="d-flex justify-content-end gap-3 mt-3">
            <button
              class="btn btn-warning"
              type="button"
              id="edit_btn"
              data-id="${todo.id}"
              onclick="toggleEditing(${todo.id})"
            >
              <i class="fas fa-pen"></i>
            </button>
            <button class="btn btn-danger" type="button" id="delete_btn" onclick="deleteTodo(${
              todo.id
            })">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>`;

    //* cards.innerHTML = cards.innerHTML + template;
    cards.innerHTML += template;
  }
}

function toggleCompleted(id) {
  for (let i = 0; i < todosArr.length; i++) {
    const todo = todosArr[i];
    if (todo.id === id) {
      console.log(todo);
      todo.isCompleted = !todo.isCompleted;
    }
  }
  render();
}

function toggleEditing(id) {
  for (let i = 0; i < todosArr.length; i++) {
    const todo = todosArr[i];
    if (todo.id === id) {
      todo.isEditing = !todo.isEditing;
    }
  }
  render();
}

function deleteTodo(id) {
  const isAccepted = confirm("Do you really delete this todo?");
  if (isAccepted) {
    const newArr = [];
    for (let i = 0; i < todosArr.length; i++) {
      const todo = todosArr[i];
      if (todo.id !== id) {
        newArr.push(todo);
      }
    }
    todosArr = newArr;
    render();
  }
}

function editTodo(e, id) {
  e.preventDefault();

  for (let i = 0; i < todosArr.length; i++) {
    const todo = todosArr[i];
    if (todo.id == id) {
      todo.task = e.target[0].value;
      todo.isEditing = !todo.isEditing;
    }
  }

  render();
}

// const editForms = document.querySelectorAll("#editForm");
// console.log(editForms);
// for (let i = 0; i < editForms.length; i++) {
//   editForms[i].addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(event);

//     for (let j = 0; j < todosArr.length; j++) {
//       const todo = todosArr[j];
//       if (todo.id == this.dataset.id) {
//         todo.task = event.target[0].value;
//         todo.isEditing = !todo.isEditing;
//       }
//     }

//     render();
//   });
// }
