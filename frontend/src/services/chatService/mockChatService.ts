import { ChatMessageModel } from "@/types/models/ChatMessageModel";
import { IChatService } from "./IChatService";
import { MessageState } from "@/types/enums/MessageState";

const MOCK_MESSAGES: ChatMessageModel[] = [
  {
    message: "Hey, how's it going?",
    userId: "user_1",
    createdAt: new Date("2024-02-08T12:30:00Z"),
    state: MessageState.Sending,
  },
  {
    message: "Not bad! Just working on some projects. You?",
    userId: "user_2",
    createdAt: new Date("2024-02-08T12:31:00Z"),
    state: MessageState.Sent,
  },
  {
    message: "Same here! Trying to wrap up a feature before the weekend.",
    userId: "user_1",
    createdAt: new Date("2024-02-08T12:32:00Z"),
    state: MessageState.Read,
  },
  {
    message: "Nice! What's the feature about?",
    userId: "user_2",
    createdAt: new Date("2024-02-08T12:33:00Z"),
    state: MessageState.Failed,
  },
  {
    message: "It's a real-time chat system. Still working on optimizations.",
    userId: "user_1",
    createdAt: new Date("2024-02-08T12:34:00Z"),
    state: MessageState.Read,
  },
];

export class MockChatService implements IChatService {
  getMessages(): Promise<ChatMessageModel[]> {
    console.log("getting mock chat messages");
    return Promise.resolve(MOCK_MESSAGES);
  }
}
