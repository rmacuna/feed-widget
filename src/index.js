import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
// import reportWebVitals from "./reportWebVitals";
import axios from "axios";

axios.defaults.headers = {
  Accept: `application/json`,
};
export const axiosService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("feed-widget-container")
);
