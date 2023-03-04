import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Admin from "./Pages/Admin";
// import User from "./Pages/User";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((sklad) => sklad.counter);
  const dispatch = useDispatch("counter");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "ADDTWO", val: 2 })}>Add Two</button>
      {/* <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes> */}
    </div>
  );
}

export default App;
