import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// var names = ["Daniel", "Lucas", "Gwen", "Henry", "Jasper", "Lucas", "Daniel"];

// const uniqueNames = names.filter((val, id, array) => {
//   console.log(val, id);
//   console.log(array.indexOf(val), id);
//   return array.indexOf(val) === id;
// });
// console.log(uniqueNames);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
