import React from "react";
import AboutCss from "./About.module.css";

function About() {
  return (
    <div>
      <h2>About page</h2>
      <a className={AboutCss.btn} href="#task">
        Task
      </a>
    </div>
  );
}

export default About;
