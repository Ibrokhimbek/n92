import React, { useContext } from "react";

const User = ({ first_name, last_name, avatar, email }) => {
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <h2>
        {first_name} {last_name}
      </h2>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default User;
