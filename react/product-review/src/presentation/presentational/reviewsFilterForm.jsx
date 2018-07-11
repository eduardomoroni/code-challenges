// @flow strict
import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";

import { GroupedCheckboxes } from "./groupedCheckboxes";
import type {
  ReviewFiltersType,
  ReviewSortingType,
  GroupByType,
  EventContentType,
} from "./types";

type PropTypes = {
  onFiltersChanges: ReviewFiltersType => void,
  onSortChanges: ReviewSortingType => void,
  onGroupByChange: GroupByType => void,
};

type StateTypes = {
  stars: Array<number>,
  orderBy: ReviewSortingType,
  groupBy: GroupByType,
};

const orderByOptions = [
  { key: "ASC", value: "ASC", text: "Older reviews" },
  { key: "DESC", value: "DESC", text: "Latest reviews" },
];

const groupByOptions = [
  { key: "DAY", value: "DAY", text: "Group by Day" },
  { key: "WEEK", value: "WEEK", text: "Group by Week" },
  { key: "MONTH", value: "MONTH", text: "Group by Month" },
];

const FIELDS_NAME = {
  orderBy: "orderBy",
  groupBy: "groupBy",
  stars: "stars",
};

export class ReviewsFilterForm extends Component<PropTypes, StateTypes> {
  state = {
    stars: [],
    orderBy: undefined,
    groupBy: "MONTH",
  };

  handleChange = (
    event: SyntheticEvent<*>,
    { name, value }: EventContentType,
  ) => {
    const partialState = { [name]: value };

    if (name === FIELDS_NAME.stars) {
      // $FlowFixMe above if is not being interpreted by flow
      this.props.onFiltersChanges(partialState);
    }

    if (name === FIELDS_NAME.orderBy) {
      // $FlowFixMe above if is not being interpreted by flow
      this.props.onSortChanges(partialState[FIELDS_NAME.orderBy]);
    }

    if (name === FIELDS_NAME.groupBy) {
      // $FlowFixMe above if is not being interpreted by flow
      this.props.onGroupByChange(partialState[FIELDS_NAME.groupBy]);
    }

    return this.setState(partialState);
  };

  handleSubmit = () => {
    // I didn't know what to do with this button.
    window.location.reload();
  };

  render() {
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Group By"
              placeholder="Group By"
              options={groupByOptions}
              onChange={this.handleChange}
              name={FIELDS_NAME.groupBy}
              value={this.state[FIELDS_NAME.groupBy]}
              selection
            />
            <Form.Select
              fluid
              label="Order By"
              placeholder="Order By"
              options={orderByOptions}
              onChange={this.handleChange}
              name={FIELDS_NAME.orderBy}
              value={this.state[FIELDS_NAME.orderBy]}
              selection
            />
          </Form.Group>
          <GroupedCheckboxes
            handleChange={this.handleChange}
            stars={this.state.stars}
          />
          <Form.Button>REFRESH</Form.Button>
        </Form>
      </Segment>
    );
  }
}
