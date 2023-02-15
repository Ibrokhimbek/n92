import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import Card from "../Card/Card";

function Users() {
  const [state, setState] = useState({
    isLoading: true,
    users: null,
  });

  const getUsers = () => {
    axios("https://reqres.in/api/users?page=2")
      .then((res) => {
        const users = res.data.data;
        setState({ isLoading: false, users });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {state.isLoading ? (
        <Spinner />
      ) : (
        state.users.map((user) => {
          return <Card key={user.id} user={user} />;
        })
      )}
    </div>
  );
}

export default Users;
