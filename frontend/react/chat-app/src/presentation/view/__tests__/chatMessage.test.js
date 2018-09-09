// @flow

import { shallow } from "enzyme";
import Moment from "moment";
import React from "react";
import { ChatMessageModel } from "../../model/chatMessageModel";
import { ChatMessage } from "../chatMessage";

const props = {
  message: new ChatMessageModel("message", Moment(), "requester", 1),
  showDateSeparator: true,
  requester: "requester",
};

describe("<ChatMessage /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<ChatMessage {...props} />);
    expect(wrapper).toExist();
  });
});
