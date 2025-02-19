import { MessageState } from "../enums/MessageState";

export type ChatMessageModel = {
  message: string;
  userId: string;
  createdAt: Date;
  state: MessageState;
};
