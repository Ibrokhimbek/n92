import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoContextProvider } from "./context/TodoContext";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TodoContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TodoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
