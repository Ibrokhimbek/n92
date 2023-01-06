//? callback
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i]);
// }

// function myfunc(cb) {
//   cb("Blabla");
// }
// myfunc((x) => {
//   console.log("fdlaskjdflask");
//   console.log(x);
// })

//? utils function
let todos = [
  {
    id: 1,
    task: "N92",
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 2,
    task: "N92",
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 3,
    task: "N92",
    isCompleted: false,
    isEditing: false,
  },
  {
    id: 4,
    task: "N92",
    isCompleted: false,
    isEditing: false,
  },
];

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// looper(todos, (todo) => {
//   console.log(todo);
// });

// const arr = [1, 2, 3, 4, 5, 6];

// looper(arr, (item) => {
//   document.write(item);
// });

//? forEach
// todos.forEach((element, index, arr) => {
//   console.log(element, index, arr);
// });

//? map
// const array = [1, 2, 3, 4, 5, 6];

// function mapper(arr, cb) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const returnedData = cb(arr[i], i, arr);
//     result.push(returnedData);
//   }
//   return result;
// }

// const newArray = mapper(array, (element) => {
//   return element * 2;
// });

// const newArray = array.map((element) => {
//   if (element % 2 === 0) {
//     return element * 2;
//   } else {
//     return element;
//   }
// });

// console.log(newArray);

//? filter
// const filteredArray = todos.filter((element, index, arr) => {
//   return element.id !== 2;
// });

// todos = filteredArray

// console.log(todos);

// function myfilter(arr, cb) {
//   const result = [];
//   for(let i = 0; i < arr.length; i++) {
//     const returnedData = cb(arr[i], i, arr);
//     if (returnedData) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const filteredTodos = myfilter(todos, (element) => element.id !== 2);

// console.log(filteredTodos);

//? reduce
// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((prevVal, currVal) => {
//   if (currVal % 2 === 0) {
//     return prevVal + currVal;
//   } else {
//     return prevVal;
//   }
// }, 0);

// console.log(sum);

//? find
// const foundData = todos.find((element, index, arr) => {
//   return element.id === 2;
// });

// console.log(foundData);

//? loop from backwards
//* for (let i = 0; i <= 10; i++) {
//*   console.log(i);
//* }

//* for (let i = todos.length - 1; i >= 0; i--) {
//*   console.log(todos[i]);
//* }

//? reverse

const reversedArray = todos.reverse();

console.log(reversedArray);
