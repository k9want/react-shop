import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(() => {
  return [
    {
      id: 0,
      title: "White and Black",
      content: "Born in France",
      price: 120000,
    },

    {
      id: 1,
      title: "Red Knit",
      content: "Born in Seoul",
      price: 110000,
    },

    {
      id: 2,
      title: "Grey Yordan",
      content: "Born in the States",
      price: 130000,
    },
    { id: 3, name: "Good Shoe", content: "made in korea", price: 80000 },
    {
      id: 4,
      title: "SharkTale",
      content: "Born in the NewYork",
      price: 170000,
    },
    {
      id: 5,
      title: "Lacoste converse",
      content: "I love lacoste",
      price: 150000,
    },
  ];
});

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
