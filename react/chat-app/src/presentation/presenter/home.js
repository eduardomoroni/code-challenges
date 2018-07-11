// @flow

import React, { Component } from "react";
import * as ChatService from "../../data/chatService";
import { ChatRequest } from "../../domain/entity/chatRequest";
import { Transcript } from "../../domain/entity/transcript";
import { Header } from "../view/header";
import { TwoColumnsLayout } from "../view/twoColumnsLayout";
import { ChatDetails } from "./chatDetails";
import { RecentChats } from "./recentChats";

type StateType = {
  requests: Array<ChatRequest>,
  selectedRequest: ?ChatRequest,
};

const byRequester = (requester: string) => (request: ChatRequest) =>
  request.requester === requester;

export class Home extends Component<{}, StateType> {
  state = {
    requests: [],
    selectedRequest: null,
  };

  componentDidMount() {
    const requests = ChatService.getChatRequests() || [];
    this.setState({ requests });
  }

  addTranscriptToChatRequest = (transcript: Transcript, requester: string) => {
    const { requests } = this.state;
    const desiredChatRequest = requests.filter(
      (chatRequest: ChatRequest) => chatRequest.requester === requester,
    );
    desiredChatRequest[0].addTranscript(transcript);

    this.setState({ requests });
  };

  onSelectChatRequest = (requester: string) => {
    const { requests } = this.state;
    const selectedRequest = requests.find(byRequester(requester));
    this.setState({ selectedRequest });
  };

  render() {
    const { requests, selectedRequest } = this.state;
    return (
      <div className="backgroundColor">
        <Header />
        <TwoColumnsLayout
          left={
            <RecentChats
              chatRequests={requests}
              onClick={this.onSelectChatRequest}
            />
          }
          right={
            <ChatDetails
              chatRequest={selectedRequest}
              addTranscriptToChatRequest={this.addTranscriptToChatRequest}
            />
          }
        />
      </div>
    );
  }
}
