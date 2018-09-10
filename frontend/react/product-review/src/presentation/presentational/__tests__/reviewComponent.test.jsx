// @flow

import { shallow } from "enzyme";
import React from "react";
import { Review } from "../../../domain/entity/review";
import { ReviewComponent } from "../reviewComponent";
import BackendReview from "../../../data/__tests__/static/backendReview";

const props = {
  review: new Review(BackendReview),
};

describe("<ReviewComponent /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<ReviewComponent {...props} />);
    expect(wrapper).toExist();
  });
});
