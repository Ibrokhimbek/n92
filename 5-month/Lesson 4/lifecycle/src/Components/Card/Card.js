import React from "react";

function Card({ user: { id, first_name, last_name, avatar, email } }) {
  const style = {
    color: 'white'
  }
  
  return (
    <div style={{ width: "300px", border: "1px solid white", padding: "20px", marginRight: '30px' }}>
      <img src={avatar} alt="user" />
      <h2 style={style}>{first_name + " " + last_name}</h2>
      <a style={style} href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default Card;
