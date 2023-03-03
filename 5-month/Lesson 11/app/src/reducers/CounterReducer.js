function CounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "UPDATE":
      return action.num;
    default:
      return state;
  }
}

export default CounterReducer;
