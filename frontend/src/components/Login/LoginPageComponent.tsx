import { Input } from "../ui/input";
import { Typography } from "../ui/typography";

export function LoginPageComponent() {
  return (
    <div className="flex flex-col justify-center items-center bg-background-primary h-full">
      <div className="bg-background-secondary w-[350px] px-4 py-6">
        <Typography variant="h2" as="h1" className="text-center">
          Login
        </Typography>

        <Input.Text />
      </div>
    </div>
  );
}
