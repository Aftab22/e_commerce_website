import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//redux
import { Provider } from "react-redux";

//import store
import store from "./redux/store";

import "./index.css";

ReactDOM.render(
  //redux-step-1 import Provider and enclose App within it
  //redux-step-5 import store created in step 4 and pass it to provider
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
