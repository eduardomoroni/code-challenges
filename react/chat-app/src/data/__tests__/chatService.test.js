// @flow

import Moment from "moment";
import React from "react";
import { Chat } from "../../domain/entity/chat";
import { Transcript } from "../../domain/entity/transcript";
import * as ChatData from "../chatData";
import { getChatRequests } from "../chatService";
jest.mock("../chatData");

const person = "person@email.com";
const anotherPerson = "anotherPerson@email.com";
const aChat = new Chat(
  "id",
  "chat",
  person,
  "initial body",
  Moment(),
  undefined,
);
const aChatFromUnknownPerson = new Chat(
  "id",
  "chat",
  "unknown",
  "initial body",
  Moment(),
  undefined,
);
const aChatFromSamePerson = new Chat(
  "id",
  "chat",
  person,
  "initial body",
  Moment(),
  [new Transcript("transcriptId", Moment(), "Edu", "Message")],
);
const aChatAnotherPerson = new Chat(
  "id",
  "chat",
  anotherPerson,
  "initial body",
  Moment(),
  undefined,
);

describe("Chat Service", () => {
  it("groups chats by requester", () => {
    (ChatData: any).requestChatData.mockReturnValue([
      aChat,
      aChatFromSamePerson,
      aChatAnotherPerson,
    ]);
    const requests = getChatRequests();

    expect(requests).toHaveLength(2);
    expect(requests[0].chats).toHaveLength(2);
    expect(requests[1].chats).toHaveLength(1);
  });

  it("filters unknown requesters", () => {
    (ChatData: any).requestChatData.mockReturnValue([
      aChat,
      aChatFromUnknownPerson,
    ]);

    const requests = getChatRequests();

    requests.forEach(request => {
      expect(request.requester).not.toBe("unknown");
    });

    expect.hasAssertions();
  });
});
