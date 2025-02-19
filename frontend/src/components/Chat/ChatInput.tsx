import { ICON_LARGE } from "@/constants/ui";
import { Paperclip, SendHorizonal } from "lucide-react";

export function ChatInput() {
  return (
    <div className="flex flex-row px-6 py-4 bg-background-secondary">
      <Paperclip size={ICON_LARGE} />

      <input className="rounded-lg bg-background-ternary w-full mx-4" />

      <SendHorizonal size={ICON_LARGE} />
    </div>
  );
}
