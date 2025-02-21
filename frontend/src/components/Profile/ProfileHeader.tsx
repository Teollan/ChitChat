import { Avatar } from "../ui/avatar";
import { Typography } from "../ui/typography";

export function ProfileHeader() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Avatar size="large" initials="SK" />
      </div>

      <Typography variant="h1" as="h1" className="mt-4">
        @Teollan
      </Typography>

      <Typography variant="h3" as="h2" className="mt-2">
        ID: 123456
      </Typography>
    </div>
  );
}
