// @flow

import Moment from "moment";
import { Chat } from "../chat";
import { ChatRequest } from "../chatRequest";
import { Transcript } from "../transcript";

describe("Chat Domain Object", () => {
  it("returns empty array in case of undefined transcript", () => {
    const chat = new Chat(
      "id",
      "chat",
      "myself@email.com",
      "Initial Message",
      Moment(),
      undefined,
    );
    expect(chat.transcripts).toEqual([]);

    const transcripts = [new Transcript(null, Moment(), "myself", "message")];
    const aChatWithTranscript = new Chat(
      "id",
      "chat",
      "myself@email.com",
      "Initial Message",
      Moment(),
      transcripts,
    );
    expect(aChatWithTranscript.transcripts).toEqual(transcripts);
  });
});
