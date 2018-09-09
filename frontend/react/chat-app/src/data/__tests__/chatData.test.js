// @flow

import React from "react";
import Moment from "moment";
import { Chat } from "../../domain/entity/chat";
import { Transcript } from "../../domain/entity/transcript";
import type { JsonChatType } from "../assets/chatdata.type";
import {
  mapTranscriptsToDomain,
  mapChatToDomain,
  requestChatData,
} from "../chatData";
import ChatsJSON from "./fixtures/chats.json";
import TranscriptsJSON from "./fixtures/transcripts.json";
import ChatDataJSON from "../assets/chatdata.json";

describe("Chat Data provides JSON as Domain objects", () => {
  it("maps chatdata.json to domain file and returns it", () => {
    const chats = requestChatData();

    ChatDataJSON.forEach((chat: JsonChatType, index: number) => {
      expect(chat.id).toEqual(chats[index].id);
      expect(chats[index]).toBeInstanceOf(Chat);
    });
  });
});

describe("Chat JSON mapping functions", () => {
  it("converts chat json representation into domain representation", () => {
    const chats = mapChatToDomain(ChatsJSON);

    expect(chats[0].id).toEqual(ChatsJSON[0].id);
    expect(chats[0].type).toEqual(ChatsJSON[0].type);
    expect(chats[0].requestedBy).toEqual(ChatsJSON[0].requested_by);
    expect(chats[0].initialMessage).toEqual(ChatsJSON[0].initial_message);
    expect(chats[0].createdAt).toEqual(Moment(ChatsJSON[0].created_at));
    expect(chats[0].transcripts).toHaveLength(2);

    expect(chats[1].id).toEqual(ChatsJSON[1].id);
    expect(chats[1].transcripts).toEqual([]);
  });

  it("converts transcript json representation into domain representation", () => {
    const expectedFirstTranscript = new Transcript(
      TranscriptsJSON[0].id,
      Moment(TranscriptsJSON[0].date),
      TranscriptsJSON[0].alias,
      TranscriptsJSON[0].message,
    );
    const expectedSecondTranscript = new Transcript(
      TranscriptsJSON[1].id,
      Moment(TranscriptsJSON[1].date),
      TranscriptsJSON[1].alias,
      TranscriptsJSON[1].message,
    );

    const transcripts = mapTranscriptsToDomain(TranscriptsJSON);

    expect(transcripts[0]).toEqual(expectedFirstTranscript);
    expect(transcripts[1]).toEqual(expectedSecondTranscript);
  });
});
