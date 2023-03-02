import React, { useCallback, useState } from "react";
import Numbers from "./Numbers";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback((val) => {
    return [number, number * val, number * val];
  }, [number]);

  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle theme</button>
      <div
        style={{
          backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "black",
        }}
      >
        <Numbers getItems={getItems} />
      </div>
    </div>
  );
}

export default App;
