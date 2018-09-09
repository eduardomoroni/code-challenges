// @flow

export type JsonTranscriptType = {
  id?: string,
  date: number,
  alias: string,
  message: string,
};

export type JsonChatType = {
  id: string,
  type: "chat" | "offline",
  requested_by: string,
  initial_message: string,
  created_at: number,
  page_url: string,
  referrer_url: string,
  entry_url: string,
  ip_address: string,
  user_agent: string,
  latitude: number,
  longitude: number,
  chat_waittime: number,
  chat_duration: number,
  survey_score: number,
  language_code: string,
  transcript: Array<JsonTranscriptType>,
};
