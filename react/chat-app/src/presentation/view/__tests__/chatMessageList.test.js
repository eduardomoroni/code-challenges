// @flow

import { shallow } from "enzyme";
import Moment from "moment";
import React from "react";
import { ChatMessageModel } from "../../model/chatMessageModel";
import { ChatMessageList } from "../chatMessageList";

const props = {
  messages: [new ChatMessageModel("message", Moment(), "requester", 1)],
  requester: "requester",
};

describe("<ChatMessageList /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<ChatMessageList {...props} />);
    expect(wrapper).toExist();
  });
});
