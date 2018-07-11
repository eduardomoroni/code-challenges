// @flow

import { shallow } from "enzyme";
import React from "react";
import { HomeLayout } from "../homeLayout";

const props = {
  header: <div />,
  content: <div />,
};

describe("<HomeLayout /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<HomeLayout {...props} />);
    expect(wrapper).toExist();
  });
});
