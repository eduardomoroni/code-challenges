import React, { Component } from "react";
import { TabContainer } from "./TabContainer";

export class StepTwo extends Component {
  render() {
    return (
      <TabContainer>
        <TabContainer.Tab id="1" title="Positive" content="Positive content" />
        <TabContainer.Tab id="2" title="Negative" content="Negative content" />
        <TabContainer.Tab id="3" title="Neutral" content="Neutral content" />
      </TabContainer>
    );
  }
}
