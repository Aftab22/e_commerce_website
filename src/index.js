import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

//redux
import { Provider } from "react-redux";

//import store
import { store, persistor } from "./redux/store";

import "./index.css";

ReactDOM.render(
  //redux-step-1 import Provider and enclose App within it
  //redux-step-5 import store created in step 4 and pass it to provider
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
