import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import configureAppStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupInterceptors } from "./middleware/network";
import { Router } from "./router";

const store = configureAppStore();
setupInterceptors();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
