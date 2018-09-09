// @flow

import React from "react";
import { ChatRequest } from "../../domain/entity/chatRequest";
import { Transcript } from "../../domain/entity/transcript";
import { ChatMessageList } from "../view/chatMessageList";
import { ChatMessageModel } from "../model/chatMessageModel";

type PropTypes = {
  chatRequest: ?ChatRequest,
  addTranscriptToChatRequest: (
    transcript: Transcript,
    requester: string,
  ) => void,
};

const toChatMessage = (
  transcript: Transcript,
  index: number,
): ChatMessageModel =>
  new ChatMessageModel(
    transcript.message,
    transcript.date,
    transcript.id,
    index,
  );

export const ChatDetails = ({
  chatRequest,
  addTranscriptToChatRequest,
}: PropTypes) => {
  const messages = chatRequest
    ? chatRequest.transcriptions.map(toChatMessage)
    : [];

  return (
    <ChatMessageList
      messages={messages}
      requester={chatRequest && chatRequest.requester}
      addTranscriptToChatRequest={addTranscriptToChatRequest}
    />
  );
};
