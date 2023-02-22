import React, { useContext } from "react";
import User from "../User/User";
import UsersContext from "../../context/UsersContext";

function Profiles() {
  const users = useContext(UsersContext)
  
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          avatar={user.avatar}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default Profiles;
