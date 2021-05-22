import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./app/store";
import CoreLayout from "./common/layouts/CoreLayout";
import "./styles/_main.scss";

ReactDOM.render(
  <Provider store={store}>
    <CoreLayout>
      <Routes />
    </CoreLayout>
  </Provider>,
  document.getElementById("root")
);
