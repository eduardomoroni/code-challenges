import React, {Component} from 'react';
import "./StepOne.css";

import DeviceImg from './img/device.svg';
import LaptopImg from './img/laptop.svg';
import TvImg from './img/monitor.svg';

export class StepOne extends Component {
  render() {
    return (
      <div className="centered">
        <div className="card">
          <a href={null} className="item">
            <img className="item__image" src={DeviceImg} alt="Cellphone"/>
            <h2 className="item__title">
              Mobile
            </h2>
            <p className="item__text">
              Get notifications about new releases in our mobile app.
            </p>
            <div className="item__price">
              <span className="item__value"><sup className="item__currency">$</sup>10</span>
              / month
            </div>
          </a><a href={null} className="item">
          <img className="item__image" src={LaptopImg} alt="Laptop"/>
          <h2 className="item__title">
            Desktop
          </h2>
          <p className="item__text">
            Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.
          </p>
          <div className="item__price">
            <span className="item__value"><sup className="item__currency">$</sup>15</span>
            / month
          </div>
        </a><a href={null} className="item" >
          <img className="item__image" src={TvImg} alt="Tv"/>
          <h2 className="item__title">
            TV
          </h2>
          <p className="item__text">
            Watch your favorite series at home on large screen with our TV application.
          </p>
          <div className="item__price">
            <span className="item__value"><sup className="item__currency">$</sup>20</span>
            / month
          </div>
        </a>
        </div>
      </div>
    );
  }
}
