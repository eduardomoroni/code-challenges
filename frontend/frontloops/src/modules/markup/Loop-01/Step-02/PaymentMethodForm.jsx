import React, { Fragment } from "react";
import "./PaymentMethodForm.css";

const Method = ({ img, label }) => (
  <Fragment>
    <input
      className="payment-form__input"
      id={label}
      type="radio"
      name="payment-radio"
    />
    <label
      className="payment-form__input-label"
      htmlFor={label}
      id={`${label}-label`}
    >
      {label}
      <span className="checkmark" />
    </label>
  </Fragment>
);

export class PaymentMethodForm extends React.PureComponent {
  static Method = Method;

  render() {
    const { children } = this.props;

    return (
      <form className="payment-form">
        {React.Children.map(children, child => <Method {...child.props} />)}
        <a href={null} className="payment-form__button">
          Next step
        </a>
      </form>
    );
  }
}
