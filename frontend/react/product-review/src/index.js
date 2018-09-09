import React from "react";
import ReactDOM from "react-dom";
import { initializeAxios } from "./data/axios";
import { App } from "./presentation/App";

initializeAxios();

ReactDOM.render(<App />, document.getElementById("root"));
