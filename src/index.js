import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let alertCart = true;

function reducer2(state = alertCart, 액션) {
  if (액션.type === "닫기") {
    state = false;
    return state;
  } else return state;
}

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
  {
    id: 3,
    title: "Flowery",
    quan: 2,
    price: 120000,
  },
  {
    id: 4,
    title: "Baby shoes",
    quan: 1,
    price: 120000,
  },
  {
    id: 5,
    title: "Red Herring",
    quan: 1,
    price: 120000,
  },
];

function reducer(state = 기본state, 액션) {
  if (액션.type === "수량증가") {
    let copy = [...state];
    copy[액션.payload.id].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    let copy = [...state];
    if (액션.payload.quan > 0) {
      copy[액션.payload.id].quan--;
    }
    return copy;
  } else if (액션.type === "항목추가") {
    if (state.find(shoe => shoe.id === 액션.payload.id)) {
      let copy = [...state];
      copy[액션.payload.id].quan++;
      return copy;
    }
    let copy = [...state];
    copy.push(액션.payload);
    return copy;
  } else return state;
}

let store = createStore(combineReducers({ reducer, reducer2 }));

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
