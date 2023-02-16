import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../src/components/assets/fonts/Candara-Font.ttf";

import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
