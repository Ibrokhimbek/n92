import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0",
  };

  return (
    <nav style={navStyle}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
