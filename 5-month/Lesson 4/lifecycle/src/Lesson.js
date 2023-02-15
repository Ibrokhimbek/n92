import { useEffect, useState } from "react";
import "./Lesson.css";

function Lesson() {
  const [state, setState] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("In useEffect");
  }, []);

  return (
    <div className="App">
      <h1>{state}</h1>
      <h1>{data}</h1>
      <button onClick={() => setState(state + 1)}>+</button>
      <button onClick={() => setData(data + "1")}>Add string</button>
    </div>
  );
}

export default Lesson;
