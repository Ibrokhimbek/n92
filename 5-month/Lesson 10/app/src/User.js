import React, { useEffect } from "react";
import PropTypes from "prop-types";

function User({ name }) {
  useEffect(() => {
    //? cleanup function
    return () => {
      console.log("Unmount");
    };
  }, []);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
