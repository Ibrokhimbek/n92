import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function UserForm() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
    </div>
  );
}

export default UserForm;
