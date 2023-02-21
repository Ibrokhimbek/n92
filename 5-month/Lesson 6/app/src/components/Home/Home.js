import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import language from "../../localization/localization";

function Home({ lang }) {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/user/${username}`);
  };

  return (
    <div>
      <h2>{language[lang].home.title}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="mt-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Home;
