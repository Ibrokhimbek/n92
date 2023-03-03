import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";
import User from "./Pages/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
