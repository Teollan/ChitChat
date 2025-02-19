import { ICON_SMALL } from "@/constants/ui";
import { MessageState } from "@/types/enums/MessageState";
import { BadgeAlert, Check, CheckCheck } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

interface MessageStateProps {
  state: MessageState;
}

export function MessageStateComponent({ state }: MessageStateProps) {
  switch (state) {
    case MessageState.Sending:
      return <Spinner size={ICON_SMALL} />;
    case MessageState.Sent:
      return <Check size={ICON_SMALL} />;
    case MessageState.Read:
      return <CheckCheck size={ICON_SMALL} />;
    case MessageState.Failed:
      return <BadgeAlert size={ICON_SMALL} />;
  }
}
