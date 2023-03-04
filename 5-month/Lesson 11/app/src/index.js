import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <UserContextProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </UserContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
