// @flow

import { Chat } from "./chat";
import { Transcript } from "./transcript";

export class ChatRequest {
  requester: string;
  chats: Array<Chat>;

  constructor(requester: string, chats: Array<Chat>) {
    this.requester = requester;
    this.chats = chats;
  }

  get transcriptions(): Array<Transcript> {
    const transcripts: Array<Transcript> = [];
    this.chats.forEach((chat: Chat) => {
      if (chat.transcripts) {
        transcripts.push(...chat.transcripts);
      }
    });

    return transcripts;
  }

  addTranscript(transcript: Transcript) {
    const lastChat = this.chats[this.chats.length - 1];
    lastChat.addTranscript(transcript);
  }
}
