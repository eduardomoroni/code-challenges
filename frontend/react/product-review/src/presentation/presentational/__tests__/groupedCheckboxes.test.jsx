// @flow

import { shallow } from "enzyme";
import Moment from "moment";
import React from "react";
import { GroupedCheckboxes } from "../groupedCheckboxes";

const props = {
  handleChange: jest.fn(),
  stars: [1],
};

describe("<GroupedCheckboxes /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<GroupedCheckboxes {...props} />);
    expect(wrapper).toExist();
  });
});
