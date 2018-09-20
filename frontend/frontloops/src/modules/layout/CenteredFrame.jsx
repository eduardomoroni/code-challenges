import React from "react";
import "./Layout.css";

export const CenteredFrame = props => (
  <div className="centered-frame" style={props.style}>
    {props.children}
  </div>
);
