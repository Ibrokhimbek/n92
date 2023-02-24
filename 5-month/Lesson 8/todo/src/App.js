import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import TodoApp from "./TodoApp";
import AuthContext from "./context/AuthContext";

function App() {
  const { access_token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!access_token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <div className="container mx-auto">
        <Routes>
          {access_token ? (
            <Route path="/" element={<TodoApp />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
