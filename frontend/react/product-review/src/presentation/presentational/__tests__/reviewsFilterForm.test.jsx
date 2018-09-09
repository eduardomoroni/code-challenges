// @flow

import { shallow } from "enzyme";
import React from "react";
import { ReviewsFilterForm } from "../reviewsFilterForm";

const props = {
  onFiltersChanges: jest.fn(),
  onSortChanges: jest.fn(),
  onGroupByChange: jest.fn(),
};

describe("<ReviewsFilterForm /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<ReviewsFilterForm {...props} />);
    expect(wrapper).toExist();
  });
});
