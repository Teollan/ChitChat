import { ChatMessageModel } from "@/types/models/ChatMessageModel";

export interface IChatService {
  getMessages(): Promise<ChatMessageModel[]>;
}
