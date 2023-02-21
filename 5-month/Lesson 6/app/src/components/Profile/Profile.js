import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    isLoading: true,
    user: null,
  });

  async function loadUser() {
    const data = await axios.get(`https://api.github.com/users/${username}`);
    return data;
  }

  useEffect(() => {
    loadUser()
      .then((res) => {
        console.log(res);
        setState({ isLoading: false, user: { ...res.data } });
      })
      .catch((err) => {
        setState({ isLoading: false });
        navigate("/404");
      });
  }, []);

  const user = state.user;

  return (
    <div>
      {state.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <h1>User {user.login}</h1>
          <img src={user.avatar_url} alt="" />
        </>
      )}
    </div>
  );
}

export default Profile;
