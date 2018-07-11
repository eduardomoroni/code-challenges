// @flow

import { groupBy } from "lodash";
import { Chat } from "../domain/entity/chat";
import { ChatRequest } from "../domain/entity/chatRequest";
import { requestChatData } from "./chatData";

type PersonChatsMapType = {
  [string]: Array<Chat>,
};

const unknownRequesters = (chat: Chat): boolean =>
  chat.requestedBy !== "unknown";

export const getChatRequests = (): Array<ChatRequest> => {
  const requests: Array<ChatRequest> = [];
  const chatsGroupedByRequester: PersonChatsMapType = groupBy(
    requestChatData().filter(unknownRequesters),
    "requestedBy",
  );

  Object.keys(chatsGroupedByRequester).forEach((requester: string) => {
    requests.push(
      new ChatRequest(requester, chatsGroupedByRequester[requester]),
    );
  });

  return requests;
};
