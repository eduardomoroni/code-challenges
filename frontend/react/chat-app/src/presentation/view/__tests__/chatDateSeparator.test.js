// @flow

import { shallow } from "enzyme";
import Moment from "moment";
import React from "react";
import { ChatDateSeparator } from "../chatDateSeparator";

const props = {
  showDateSeparator: true,
  date: Moment(),
};

describe("<ChatDateSeparator /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<ChatDateSeparator {...props} />);
    expect(wrapper).toExist();
  });
});
