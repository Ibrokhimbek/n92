function CounterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ADDTWO":
      return state + action.val;
    default:
      return state;
  }
}

export { CounterReducer };
