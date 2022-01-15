import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let 기본state = [
  {
    id: 0,
    title: "White and Black",
    quan: 1,
    price: 120000,
  },

  {
    id: 1,
    title: "Red Knit",
    quan: 6,
    price: 110000,
  },

  {
    id: 2,
    title: "Grey Yordan",
    quan: 2,
    price: 130000,
  },
  { id: 3, name: "Good Shoe", quan: 5, price: 80000 },
  {
    id: 4,
    title: "SharkTale",
    quan: 2,
    price: 170000,
  },
  {
    id: 5,
    title: "Lacoste converse",
    quan: 1,
    price: 150000,
  },
];

function reducer(state = 기본state, 액션) {
  if (액션.type === "수량증가") {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    let copy = [...state];
    copy[0].quan--;
    return copy;
  } else return state;
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
