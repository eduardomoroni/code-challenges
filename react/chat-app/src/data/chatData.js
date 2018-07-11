// @flow

import Moment from "moment";
import { Chat } from "../domain/entity/chat";
import { Transcript } from "../domain/entity/transcript";
import ChatData from "./assets/chatdata.json";
import type { JsonTranscriptType, JsonChatType } from "./assets/chatdata.type";

export const requestChatData = (): Array<Chat> => mapChatToDomain(ChatData);

export const mapChatToDomain = (jsonChats: Array<JsonChatType>): Array<Chat> =>
  jsonChats.map(
    (jsonChat: JsonChatType) =>
      new Chat(
        jsonChat.id,
        jsonChat.type,
        jsonChat.requested_by,
        jsonChat.initial_message,
        Moment(jsonChat.created_at),
        jsonChat.transcript && mapTranscriptsToDomain(jsonChat.transcript),
      ),
  );

export const mapTranscriptsToDomain = (
  jsonTranscripts: Array<JsonTranscriptType>,
): Array<Transcript> =>
  jsonTranscripts.map(
    ({ id, date, alias, message }: JsonTranscriptType) =>
      new Transcript(id, Moment(date), alias, message),
  );
