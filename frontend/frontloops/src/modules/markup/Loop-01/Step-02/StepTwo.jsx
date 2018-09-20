import React, { Component } from "react";

import { CenteredFrame } from "../../../layout/CenteredFrame";
import { Dots } from "./Dots";
import "./StepTwo.css";

export class StepTwo extends Component {
  render() {
    return (
      <CenteredFrame>
        <Dots selected={1} quantity={3} />
        <h2>Payment Method</h2>
      </CenteredFrame>
    );
  }
}
