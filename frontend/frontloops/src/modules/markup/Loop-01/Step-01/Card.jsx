import React, {Component} from 'react';
import "./Card.css";

const CardItem = (props) => (
  <a href={null} className="item">
    <img className="item__image" src={props.img} alt="Cellphone"/>
    <h2 className="item__title">
      {props.title}
    </h2>
    <p className="item__text">
      {props.text}
    </p>
    <div className="item__price">
      <span className="item__value"><sup className="item__currency">$</sup>{props.price}</span>
      / month
    </div>
  </a>
);

export class Card extends Component {
  static Item = CardItem;

  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}
