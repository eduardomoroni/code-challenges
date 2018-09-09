// @flow strict

import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import type { EventContentType } from "./types";

type PropTypes = {
  handleChange: (event: SyntheticEvent<*>, EventContentType) => void,
  stars: Array<number>,
};

export class GroupedCheckboxes extends Component<PropTypes> {
  starsFilterContains = (qty: number) => this.props.stars.includes(qty);
  toggle = (array: Array<number>, target: number): Array<number> => {
    if (array.includes(target)) {
      return array.filter(e => e !== target);
    }

    return array.concat([target]);
  };

  handleCheckboxChange = (
    event: SyntheticEvent<*>,
    { value }: EventContentType,
  ) => {
    this.props.handleChange(event, {
      name: "stars",
      value: this.toggle(this.props.stars, Number(value)),
    });
  };

  // TODO: Refactor this to shorter syntax
  render() {
    return (
      <Form.Group inline>
        <label>FILTER BY</label>
        <Form.Checkbox
          label={`1 \u2605`}
          value="1"
          onChange={this.handleCheckboxChange}
          checked={this.starsFilterContains(1)}
        />
        <Form.Checkbox
          label={`2 \u2605`}
          value="2"
          onChange={this.handleCheckboxChange}
          checked={this.starsFilterContains(2)}
        />
        <Form.Checkbox
          label={`3 \u2605`}
          value="3"
          onChange={this.handleCheckboxChange}
          checked={this.starsFilterContains(3)}
        />
        <Form.Checkbox
          label={`4 \u2605`}
          value="4"
          onChange={this.handleCheckboxChange}
          checked={this.starsFilterContains(4)}
        />
        <Form.Checkbox
          label={`5 \u2605`}
          value="5"
          onChange={this.handleCheckboxChange}
          checked={this.starsFilterContains(5)}
        />
      </Form.Group>
    );
  }
}
