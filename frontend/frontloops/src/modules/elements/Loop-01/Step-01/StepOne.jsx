import React, {Component} from 'react';
import {SegmentedControl} from "./SegmentedControl";

export class StepOne extends Component {
  render() {
    return (
        <SegmentedControl>
          <SegmentedControl.Item
            text="Sort by price"
            value="1"
          />
          <SegmentedControl.Item
            text="Sort by name"
            value="2"
          />
          <SegmentedControl.Item
            text="Sort by relevance"
            value="3"
          />
        </SegmentedControl>
    );
  }
}
