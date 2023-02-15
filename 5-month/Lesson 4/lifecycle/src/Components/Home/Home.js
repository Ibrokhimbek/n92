import React from "react";
import HomeCss from "./Home.module.css";

function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <a className={HomeCss.btn} href="#task">
        Task
      </a>
    </div>
  );
}

export default Home;
