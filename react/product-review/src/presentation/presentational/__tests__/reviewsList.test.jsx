// @flow

import { shallow } from "enzyme";
import React from "react";
import { Review } from "../../../domain/entity/review";
import { ReviewsList } from "../reviewsList";
import BackendReview from "../../../data/__tests__/static/backendReview"


const props = {
  reviewsGrouped: {
    "GROUP": [new Review(BackendReview)]
  },
  onEndReached: jest.fn(),
  hasMore: false,
};

describe("<ReviewsList /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<ReviewsList {...props} />);
    expect(wrapper).toExist();
  });
});
