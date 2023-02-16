// import { useState } from "react";
import "./App.css";
import useInputHook from "./hooks/useInputHook";
// import About from "./Components/About/About";
// import Home from "./Components/Home/Home";
// import Users from "./Components/Users/Users";

function App() {
  const [name, changeName, resetName] = useInputHook();
  const [job, changeJob, resetJob] = useInputHook();

  const onSubmit = (evt) => {
    evt.preventDefault();
    resetName();
    resetJob();
  };

  // const [state, setState] = useState({
  //   name: null,
  //   job: null,
  // });

  // const changeInput = (evt) => {
  //   setState({ ...state, [evt.target.name]: evt.target.value });
  // };

  return (
    <div className="App">
      <h2>{name}</h2>
      <h2>{job}</h2>

      <form onSubmit={onSubmit}>
        <input
          onChange={changeName}
          value={name}
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={changeJob}
          value={job}
          name="job"
          type="text"
          placeholder="Job"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
