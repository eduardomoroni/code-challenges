// @flow

import React from "react";
import { ChatRequest } from "../../domain/entity/chatRequest";
import { ChatList } from "../view/chatList";
import { RecentChatItemModel } from "../model/recentChatItemModel";

type PropsType = {
  chatRequests: Array<ChatRequest>,
  onClick: Function,
};

export const RecentChats = (props: PropsType) => {
  const recentChats = props.chatRequests.map(
    (request: ChatRequest) => new RecentChatItemModel(request.requester),
  );

  return <ChatList items={recentChats} onClick={props.onClick} />;
};
