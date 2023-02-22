import React, { forwardRef } from "react";

const UserForm = forwardRef((props, ref) => {
  return (
    <div>
      <h1 ref={ref}>{props.text}</h1>
    </div>
  );
});

export default UserForm;
