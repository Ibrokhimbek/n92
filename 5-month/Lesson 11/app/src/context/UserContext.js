import { createContext, useReducer } from "react";
import UserReducer from "../reducers/UserReducer";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(UserReducer, []);
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export { UserContextProvider };
