import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Admin() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const { dispatch } = useContext(UserContext);

  const allData = (data) => {
    dispatch({ type: "ADD", data });
    reset();
    navigate("/user");
  };

  return (
    <form onSubmit={handleSubmit(allData)}>
      <input type="text" placeholder="Firstname" {...register("firstname")} />
      <input type="text" placeholder="Surname" {...register("surname")} />
      <input type="url" placeholder="Image" {...register("imageUrl")} />
      <input type="email" placeholder="Email" {...register("email")} />
      <button type="submit">Add user</button>
    </form>
  );
}

export default Admin;
