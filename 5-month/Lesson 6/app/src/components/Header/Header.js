import React from "react";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";
import language from "../../localization/localization";

function Header({ lang, setLang }) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0",
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {language[lang].header.home}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {({ isActive }) => (
              <span style={isActive ? { color: "red" } : undefined}>
                {language[lang].header.about}
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {language[lang].header.services}
          </NavLink>
        </li>
        <li>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="uz" key="UZ">
              uz
            </option>
            <option value="ru" key="RU">
              ru
            </option>
            <option value="en" key="EN">
              en
            </option>
          </select>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
