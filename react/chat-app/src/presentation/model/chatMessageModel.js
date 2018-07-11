// @flow

import Moment from "moment";

export class ChatMessageModel {
  body: string;
  date: Moment;
  sender: ?string;
  id: number;

  constructor(message: string, date: Moment, requester: ?string, id: number) {
    this.body = message;
    this.date = date;
    this.sender = requester;
    this.id = id;
  }
}
