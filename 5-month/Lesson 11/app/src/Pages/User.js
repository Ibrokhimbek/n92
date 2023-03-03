import React, { useContext } from "react";
import Card from "../components/Card";
import UserContext from "../context/UserContext";

function User() {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h2>All Users</h2>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
}

export default User;
