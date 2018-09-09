// @flow

import { shallow } from "enzyme";
import Moment from "moment";
import React from "react";
import { RecentChatItemModel } from "../../model/recentChatItemModel";
import { ChatList } from "../chatList";

const props = {
  onClick: jest.fn(),
  items: [new RecentChatItemModel("requester")],
};

describe("<ChatList /> smoke test", () => {
  it("renders without errors or warnings", () => {
    const wrapper = shallow(<ChatList {...props} />);
    expect(wrapper).toExist();
  });
});
