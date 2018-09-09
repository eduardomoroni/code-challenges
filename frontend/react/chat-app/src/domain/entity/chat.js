// @flow

import type Moment from "moment";
import { Transcript } from "./transcript";

export class Chat {
  id: string;
  type: "chat" | "offline";
  requestedBy: string;
  initialMessage: string;
  createdAt: Moment;
  transcripts: Array<Transcript>;

  constructor(
    id: string,
    type: "chat" | "offline",
    requestedBy: string,
    initialMessage: string,
    createdAt: Moment,
    transcripts: ?Array<Transcript>,
  ) {
    this.id = id;
    this.type = type;
    this.requestedBy = requestedBy;
    this.initialMessage = initialMessage;
    this.createdAt = createdAt;
    this.transcripts = transcripts || [];
  }

  addTranscript(transcript: Transcript) {
    this.transcripts.push(transcript);
  }
}
