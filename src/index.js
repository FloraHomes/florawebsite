import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "../src/components/assets/fonts/Candara-Font.ttf";

import App from "./App";
// import store from "./store";
import storeInit from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={storeInit.store}>
    <PersistGate loading={null} persistor={storeInit.persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
