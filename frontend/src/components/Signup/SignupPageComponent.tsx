import { Typography } from "../ui/typography";
import { Link } from "../ui/link";
import { SignupSteps } from "./SignupSteps";

export function SignupPageComponent() {
  return (
    <div className="flex flex-col justify-center items-center bg-background-primary h-full">
      <div className="bg-background-secondary w-[350px] px-4 py-6">
        <Typography variant="h2" as="h1" align="center">
          Sign Up
        </Typography>

        <SignupSteps />

        <Typography variant="small" align="center" as="div" className="mt-6">
          <p>Already have an account? </p>
          <Link href="/login">Sign In!</Link>
        </Typography>
      </div>
    </div>
  );
}
