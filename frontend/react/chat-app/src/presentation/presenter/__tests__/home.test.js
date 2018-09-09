// @flow

import { mount } from "enzyme";
import React from "react";
import Moment from "moment";
import * as ChatService from "../../../data/chatService";
import { Chat } from "../../../domain/entity/chat";
import { ChatRequest } from "../../../domain/entity/chatRequest";
import { Transcript } from "../../../domain/entity/transcript";
import { ChatDetails } from "../chatDetails";
import { Home } from "../home";
import { RecentChats } from "../recentChats";

jest.mock("../../../data/chatService");

const requester = "requester";
const aChat = new Chat(
  "id",
  "chat",
  requester,
  "initial body",
  Moment(),
  undefined,
);
const chatRequest = new ChatRequest(requester, [aChat]);
const getChatRequestsMock = [chatRequest];

describe("<Home /> mounting", () => {
  let componentDidMountSpy;
  let wrapper;
  let instance;

  beforeAll(() => {
    (ChatService: any).getChatRequests.mockReturnValue(getChatRequestsMock);
    componentDidMountSpy = jest.spyOn(Home.prototype, "componentDidMount");
    wrapper = mount(<Home />);
    instance = wrapper.instance();
  });

  it("mounts <RecentChats /> and <ChatDetails /> correctly", () => {
    expect(wrapper.find(ChatDetails).prop("chatRequest")).toEqual(
      instance.state.selectedRequest,
    );
    expect(wrapper.find(RecentChats).prop("chatRequests")).toEqual(
      instance.state.requests,
    );
    expect(wrapper.find(RecentChats).prop("onClick")).toEqual(
      instance.onSelectChatRequest,
    );
  });

  it("provides a callback to save a transcription in a chat", () => {
    const transcript = new Transcript("ADDED", Moment(), "alias", "message");
    instance.addTranscriptToChatRequest(transcript, requester);

    expect(instance.state.requests[0].chats[0].transcripts).toContain(
      transcript,
    );
  });

  it("componenDidMount calls getChatRequests and update its state", () => {
    expect(componentDidMountSpy).toHaveBeenCalled();
    expect(ChatService.getChatRequests).toHaveBeenCalled();
    expect(instance.state).toEqual({
      requests: getChatRequestsMock,
      selectedRequest: null,
    });
  });

  it("passes selected request to <ChatDetails />", () => {
    expect(wrapper.find(ChatDetails).prop("chatRequest")).toEqual(null);

    instance.onSelectChatRequest(requester);
    wrapper.update();

    expect(wrapper.find(ChatDetails).prop("chatRequest")).toEqual(chatRequest);
  });
});
