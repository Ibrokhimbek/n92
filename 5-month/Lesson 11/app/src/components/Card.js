import React from "react";

const Card = ({ id, firstname, surname, email, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="avatar" width={'250px'}/>
      <h2>
        {surname} {firstname}
      </h2>
      <a href={`mailto:${email}`} target="_blank">
        {email}
      </a>
    </div>
  );
};

export default Card;
