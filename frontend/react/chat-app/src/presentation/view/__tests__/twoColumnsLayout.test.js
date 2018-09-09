// @flow

import { shallow } from "enzyme";
import React from "react";
import { TwoColumnsLayout } from "../twoColumnsLayout";

const props = {
  left: <div />,
  right: <div />,
};

describe("<TwoColumnsLayout /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<TwoColumnsLayout {...props} />);
    expect(wrapper).toExist();
  });
});
