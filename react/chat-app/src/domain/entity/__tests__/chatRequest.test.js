// @flow

import Moment from "moment";
import { Chat } from "../chat";
import { ChatRequest } from "../chatRequest";
import { Transcript } from "../transcript";

const requester = "moroni@email.com";
const aChat = new Chat("id", "chat", requester, "initial Message", Moment(), [
  new Transcript(undefined, Moment(), "alias", "message"),
]);
const anotherChat = new Chat(
  "id",
  "chat",
  requester,
  "initial Message",
  Moment(),
  [
    new Transcript(undefined, Moment(), "alias", "message"),
    new Transcript(undefined, Moment(), "alias", "message"),
  ],
);
const oneMoreChat = new Chat(
  "id",
  "chat",
  requester,
  "initial Message",
  Moment(),
  [new Transcript(undefined, Moment(), "alias", "message")],
);

describe("Chat Request Domain Object", () => {
  it("returns transcriptons from its chats", () => {
    const chatRequest = new ChatRequest(requester, [
      aChat,
      anotherChat,
      oneMoreChat,
    ]);

    expect(chatRequest.transcriptions).toHaveLength(
      aChat.transcripts.length +
        anotherChat.transcripts.length +
        oneMoreChat.transcripts.length,
    );
  });
});
