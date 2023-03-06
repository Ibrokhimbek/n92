import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  addTwice,
} from "./redux/counterSlice/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addTwice({ price: "$22", id: 2 }))}>
        Add 2
      </button>
    </div>
  );
}

export default App;
