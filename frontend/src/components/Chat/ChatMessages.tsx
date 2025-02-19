"use client";

import { useChatMessages } from "@/hooks/chatPageHooks";
import { Message } from "@/components/ui/message";

export function ChatMessages() {
  const { data: messages } = useChatMessages("1");

  return (
    <div className="flex flex-col flex-grow gap-4 px-8 pt-4 pb-12">
      <div className="flex-grow" />
      {messages?.map((message, index) => (
        <Message
          key={index}
          message={message.message}
          state={message.state}
          sentAt={message.createdAt}
          byMe={message.userId === "user_1"}
        />
      ))}
    </div>
  );
}
