import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import myReducer from "./reducers";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";

const store = createStore(myReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
