// @flow

import MessageList from "anchor-ui/message-list";
import moment from "moment";
import React, { Fragment } from "react";
import { Transcript } from "../../domain/entity/transcript";
import { ChatMessageModel } from "../model/chatMessageModel";
import { ChatMessage } from "./chatMessage";

type PropsType = {
  addTranscriptToChatRequest: (
    transcript: Transcript,
    requester: string,
  ) => void,
  messages: Array<ChatMessageModel>,
  requester: ?string,
};

const trackMessageDates = (
  index: number,
  message: ChatMessageModel,
  lastDate: moment,
) => {
  let showDateSeparator = false;

  if (index === 0) {
    showDateSeparator = true;
  }

  const date = message.date;
  const dateIsAfterLastDate = moment(date).diff(moment(lastDate), "days");

  if (!showDateSeparator && dateIsAfterLastDate) {
    showDateSeparator = true;
  }

  return { showDateSeparator, date };
};

// FIXME: This was part of a live coding session, we decided to not use
// state in order to meet our agenda.
// I know this is a terrible idea.
let message = "";

export const ChatMessageList = (props: PropsType) => {
  let lastDate = moment().toISOString();

  const handleOnclick = event => {
    props.addTranscriptToChatRequest(
      new Transcript("ANY_ID", moment(), "alias", message),
      props.requester || "UNDEFINED REQUESTER",
    );
  };

  const onTextChange = event => {
    message = event.target.value;
  };

  return (
    <Fragment>
      <MessageList autoScroll>
        {props.messages.map((message, index) => {
          const dateTracker = trackMessageDates(index, message, lastDate);
          lastDate = dateTracker.date;

          return (
            <ChatMessage
              key={message.id}
              message={message}
              requester={props.requester}
              showDateSeparator={dateTracker.showDateSeparator}
            />
          );
        })}
      </MessageList>
      <input type="text" onChange={onTextChange} />
      <button onClick={handleOnclick}>SEND</button>
    </Fragment>
  );
};
