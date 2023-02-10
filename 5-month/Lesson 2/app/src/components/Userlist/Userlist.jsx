import React, { useState } from "react";
import Usercard from "../UserCard/Usercard";

const Userlist = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Palonchi",
      description: "fasdlfbasdlfasdlfkjas",
      age: 30,
    },
    {
      id: 2,
      name: "Palonchi",
      description: "fasdlfbasdlfasdlfkjas",
      age: 30,
    },
    {
      id: 3,
      name: "Palonchi",
      description: "fasdlfbasdlfasdlfkjas",
      age: 30,
    },
    {
      id: 4,
      name: "Palonchi",
      description: "fasdlfbasdlfasdlfkjas",
      age: 30,
    },
  ]);

  return (
    <div>
      {users.map((user) => {
        return <Usercard user={user} key={user.id} />;
      })}
    </div>
  );
};

export default Userlist;
