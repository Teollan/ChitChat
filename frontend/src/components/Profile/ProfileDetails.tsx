import { LogOut, MonitorSmartphone, Settings } from "lucide-react";
import { ProfileActions } from "./ProfileActions";
import { ProfileHeader } from "./ProfileHeader";
import { ICON_LARGE } from "@/constants/ui";
import { Typography } from "../ui/typography";

export function ProfileDetails() {
  return (
    <div className="container max-w-[600px] h-[90svh] bg-background-secondary px-6 py-10">
      <ProfileHeader />

      <hr className="border-foreground-secondary my-4" />

      <ProfileActions.List>
        <ProfileActions.Item>
          <Settings size={ICON_LARGE} />

          <Typography variant="h2" as="span">
            Settings
          </Typography>
        </ProfileActions.Item>

        <ProfileActions.Item>
          <MonitorSmartphone size={ICON_LARGE} />

          <Typography variant="h2" as="span">
            My Devices
          </Typography>
        </ProfileActions.Item>

        <ProfileActions.Item variant="destructive">
          <LogOut size={ICON_LARGE} />

          <Typography variant="h2" as="span">
            Log Out
          </Typography>
        </ProfileActions.Item>
      </ProfileActions.List>
    </div>
  );
}
