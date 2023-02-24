import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LangContextProvider } from "./context/LangContext";
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LangContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </LangContextProvider>
  </React.StrictMode>
);
