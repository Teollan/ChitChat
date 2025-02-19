import { PhoneCall } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { ICON_LARGE } from "@/constants/ui";
import { Typography } from "@/components/ui/typography";

export function ChatHeader() {
  return (
    <div className="flex justify-between items-center w-full p-4 bg-background-secondary">
      <div className="flex items-center gap-4">
        <Avatar initials={"JD"} />

        <div className="flex flex-col gap-0.5">
          <Typography as="h3" variant="h3" leading="none">
            John Dow
          </Typography>
          <Typography as="p" variant="small" leading="none">
            Last online 12:42
          </Typography>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="p-1">
          <PhoneCall size={ICON_LARGE} />
        </div>
      </div>
    </div>
  );
}
