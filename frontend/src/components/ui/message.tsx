import { MessageState } from "@/types/enums/MessageState";
import { formatTime } from "@/utils/time";
import { tv } from "tailwind-variants";
import { Typography } from "./typography";
import { MessageStateComponent } from "./messageStateComponent";

const ChatMessageVariants = tv({
  base: "px-6 py-2 max-w-[60%] rounded-lg",
  variants: {
    author: {
      me: "bg-accent-primary ml-auto",
      notMe: "bg-accent-secondary mr-auto",
    },
  },
});

interface MessageProps {
  message: string;
  sentAt: Date;
  state: MessageState;
  byMe?: boolean;
}

export function Message({ message, sentAt, state, byMe }: MessageProps) {
  return (
    <div className={ChatMessageVariants({ author: byMe ? "me" : "notMe" })}>
      <div>{message}</div>
      <Typography
        as="div"
        variant="small"
        className="w-full flex justify-between items-center text-inherit"
      >
        {formatTime(sentAt)}
        <MessageStateComponent state={state} />
      </Typography>
    </div>
  );
}
