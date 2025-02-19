import { Suspense } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

export function ChatComponent() {
  return (
    <div className="flex flex-col bg-background-primary h-full">
      <Suspense fallback={<>Loading...</>}>
        <ChatHeader />
      </Suspense>

      <Suspense fallback={<>Loading...</>}>
        <ChatMessages />
      </Suspense>

      <ChatInput />
    </div>
  );
}
