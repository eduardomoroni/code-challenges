// @flow

import { shallow } from "enzyme";
import Moment from "moment";
import React from "react";
import { Chat } from "../../../domain/entity/chat";
import { ChatRequest } from "../../../domain/entity/chatRequest";
import { Transcript } from "../../../domain/entity/transcript";
import { ChatMessageModel } from "../../model/chatMessageModel";
import { RecentChatItemModel } from "../../model/recentChatItemModel";
import { ChatMessageList } from "../../view/chatMessageList";
import { ChatDetails } from "../chatDetails";

const requester = "requester";
const aTranscript = new Transcript("id", Moment(), "eduardo", "message");
const aChat = new Chat("id", "chat", requester, "initial body", Moment(), [
  aTranscript,
]);

const props = {
  chatRequest: new ChatRequest(requester, [aChat]),
};

describe("<ChatDetails /> presenter", () => {
  const wrapper = shallow(<ChatDetails {...props} />);
  const chatListProps = wrapper.find(ChatMessageList).props();

  it("maps ChatRequest into ChatMessageModel and pass them to <ChatMessageList>", () => {
    expect(chatListProps.messages).toContainEqual(
      new ChatMessageModel(
        aTranscript.message,
        aTranscript.date,
        aTranscript.id,
        0,
      ),
    );
  });

  it("if receives null ChatRequests maps it to empty array", () => {
    const wrapper = shallow(<ChatDetails chatRequest={null} />);
    expect(wrapper.find(ChatMessageList).prop("messages")).toEqual([]);
  });

  it("provides a callback to add new transcript to a chat", () => {});
});
