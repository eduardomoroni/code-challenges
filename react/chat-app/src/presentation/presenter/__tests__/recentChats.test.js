// @flow

import { shallow } from "enzyme";
import Moment from "moment";
import React from "react";
import { Chat } from "../../../domain/entity/chat";
import { ChatRequest } from "../../../domain/entity/chatRequest";
import { RecentChatItemModel } from "../../model/recentChatItemModel";
import { ChatList } from "../../view/chatList";
import { RecentChats } from "../recentChats";

const requester = "requester";
const aChat = new Chat(
  "id",
  "chat",
  requester,
  "initial body",
  Moment(),
  undefined,
);
const props = {
  onClick: jest.fn(),
  chatRequests: [new ChatRequest(requester, [aChat])],
};

describe("<RecentChats /> presenter", () => {
  const wrapper = shallow(<RecentChats {...props} />);
  const chatListProps = wrapper.find(ChatList).props();

  it("maps ChatRequests into RecentChatItemModel and pass them to <ChatList>", () => {
    expect(chatListProps.items).toContainEqual(
      new RecentChatItemModel(requester),
    );
  });

  it("passes onClick function to <ChatList />", () => {
    expect(chatListProps.onClick).toEqual(props.onClick);
  });
});
