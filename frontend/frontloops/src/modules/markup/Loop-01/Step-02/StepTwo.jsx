import React, { Component } from "react";

import { CenteredFrame } from "../../../layout/CenteredFrame";
import { Dots } from "./Dots";
import "./StepTwo.css";
import {
  PaymentMethodForm,
  PaymentMethodForm as Payment
} from "./PaymentMethodForm";
import VisaImg from "./img/visa.svg";
import MasterCardImg from "./img/mastercard.svg";
import MaestroImg from "./img/maestro.svg";

export class StepTwo extends Component {
  render() {
    return (
      <CenteredFrame>
        <Dots selected={1} quantity={3} />
        <h2>Payment method</h2>
        <PaymentMethodForm>
          <Payment.Method label="Visa" img={VisaImg} />
          <Payment.Method label="MasterCard" img={MasterCardImg} />
          <Payment.Method label="Maestro" img={MaestroImg} />
        </PaymentMethodForm>
      </CenteredFrame>
    );
  }
}
