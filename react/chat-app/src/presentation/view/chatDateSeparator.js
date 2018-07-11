// @flow

import DateSeparator from "anchor-ui/date-separator";
import moment from "moment/moment";
import React from "react";

type PropsType = {
  showDateSeparator: ?boolean,
  date: moment,
};

export const ChatDateSeparator = (props: PropsType) =>
  props.showDateSeparator ? (
    <DateSeparator date={props.date.format("D MMM")} />
  ) : null;
