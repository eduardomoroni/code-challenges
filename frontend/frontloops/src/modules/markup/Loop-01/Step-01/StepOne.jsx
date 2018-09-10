import React, { Component } from "react";

import { Centered } from "../../../layout/Centered";
import { Card } from "./Card";

import DeviceImg from "./img/device.svg";
import LaptopImg from "./img/laptop.svg";
import TvImg from "./img/monitor.svg";

export class StepOne extends Component {
  render() {
    return (
      <Centered>
        <Card>
          <Card.Item
            img={DeviceImg}
            title="Mobile"
            text="Get notifications about new releases in our mobile app."
            price="10"
          />
          <Card.Item
            img={LaptopImg}
            title="Desktop"
            text="Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms."
            price="15"
          />
          <Card.Item
            img={TvImg}
            title="TV"
            text="Watch your favorite series at home on large screen with our TV application."
            price="20"
          />
        </Card>
      </Centered>
    );
  }
}
