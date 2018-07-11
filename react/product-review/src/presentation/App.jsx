import * as React from "react";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import { createStore } from "../domain/state/store";
import "./assets/stylesheet/index.css";
import { Home } from "./containers/home";

export const App = () => (
  <Provider store={createStore()}>
    <Home />
  </Provider>
);
