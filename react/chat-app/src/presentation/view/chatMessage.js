// @flow

import Message from "anchor-ui/message";
import moment from "moment";
import React from "react";
import AvatarPlaceholder from "../assets/images/user-avatar.png";
import { ChatMessageModel } from "../model/chatMessageModel";
import { ChatDateSeparator } from "./chatDateSeparator";

type PropsType = {
  message: ChatMessageModel,
  showDateSeparator: boolean,
  requester: ?string,
};

export const ChatMessage = ({
  message,
  showDateSeparator,
  requester,
}: PropsType) => (
  <Message
    key={message.id}
    body={message.body}
    myMessage={requester === message.sender || !message.sender}
    username={message.sender}
    avatar={AvatarPlaceholder}
    createdAt={moment(message.date).format("HH:mm")}
    separator={
      <ChatDateSeparator
        date={message.date}
        showDateSeparator={showDateSeparator}
      />
    }
  />
);
