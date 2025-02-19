import { QUERIES } from "@/constants/queries";
import { ChatService } from "@/services/chatService";
import { ChatMessageModel } from "@/types/models/ChatMessageModel";
import useSWR from "swr";

export function useChatMessages(chatId: string) {
  const chatService = new ChatService();

  const query = useSWR<ChatMessageModel[]>(
    [QUERIES.CHAT, chatId, "messages"],
    () => chatService.getMessages()
  );

  return query;
}
