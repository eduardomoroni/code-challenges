// @flow

import type Moment from "moment";

export class Transcript {
  id: ?string;
  date: Moment;
  alias: string;
  message: string;

  constructor(id: ?string, date: Moment, alias: string, message: string) {
    this.id = id;
    this.date = date;
    this.alias = alias;
    this.message = message;
  }
}
