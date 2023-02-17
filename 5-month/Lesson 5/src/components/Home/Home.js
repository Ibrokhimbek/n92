import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserHistory from "../UserHistory/UserHistory";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/user/${username}`);
  };

  return (
    <div>
      <h2>Search your github account</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="mt-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>

      <UserHistory />
    </div>
  );
}

export default Home;
