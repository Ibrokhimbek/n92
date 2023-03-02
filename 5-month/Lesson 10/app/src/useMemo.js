import { useState, useMemo } from "react";
import "./App.css";

function slowFunction(num) {
  console.log("Slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const num = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <div className="App">
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle theme</button>
      <p
        style={{
          backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "black",
        }}
      >
        {num}
      </p>
    </div>
  );
}

export default App;
