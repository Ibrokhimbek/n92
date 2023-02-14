import { useRef, useState } from "react";
import "./App.css";

function App() {
  // const [state, setstate] = useState("");
  const inputRef = useRef();

  const showRef = () => {
    console.dir(inputRef.current);
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>No data</h1>
        <input
          type="text"
          ref={inputRef}
          // onChange={(e) => setstate(e.target.value)}
        />
        <button onClick={showRef}>Clicker</button>
      </div>
    </div>
  );
}

export default App;
