import React from "react";

const Usercard = ({ user: { name, description, age } }) => {
  return (
    <div style={{ border: "1px solid black", marginBottom: "20px" }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{age}</h3>
    </div>
  );
};

export default Usercard;
