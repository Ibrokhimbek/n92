import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const { login, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const getInputVal = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data)
      .then((res) => {
        window.localStorage.setItem("token", JSON.stringify(res.data.token));
        setAuth(res.data.token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <center className="mt-[90px]">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="border border-width-2 mt-6"
            type="text"
            placeholder="Username"
            name="username"
            onChange={getInputVal}
            value={data.username}
          />
          <input
            className="border border-width-2 mt-6"
            type="password"
            placeholder="Password"
            name="password"
            onChange={getInputVal}
            value={data.password}
          />
          <button
            className="py-1 px-2 mt-5 border border-width-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}

export default Login;
