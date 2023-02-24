import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(window.localStorage.getItem("token")) || null
  );

  const login = async ({ username, password }) => {
    const response = await axios.post(
      "https://todo-for-n92.cyclic.app/user/login",
      { username, password },
      {
        "Content-Type": "application/json",
      }
    )
      
    return response
  };

  return (
    <AuthContext.Provider value={{ access_token: auth, login, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthContextProvider };
