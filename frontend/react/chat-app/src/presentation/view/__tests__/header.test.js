// @flow

import { shallow } from "enzyme";
import React from "react";
import { Header } from "../header";

describe("<Header /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toExist();
  });
});
