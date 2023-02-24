import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function User() {
  const { user } = useContext(UserContext);

  return <h1>{user}</h1>;
}

export default User;
