import { useContext } from "react";
import "./App.css";
import CounterContext from "./context/CounterContext";

function App() {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => dispatch({ type: "UPDATE", num: e.target.value })}
      />
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;
