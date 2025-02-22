"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Typography } from "../ui/typography";
import { Link } from "../ui/link";

export function LoginPageComponent() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center bg-background-primary h-full">
      <div className="bg-background-secondary w-[350px] px-4 py-6">
        <Typography variant="h2" as="h1" align="center">
          Login
        </Typography>

        <div className="flex flex-col gap-4 mt-6">
          <Input.Text placeholder="Email or Username" />

          <Input.Password
            placeholder="Password"
            showPassword={showPassword}
            onShowPasswordChange={setShowPassword}
          />
        </div>

        <div className="mt-6">
          <Typography variant="small" align="center" as="div">
            <Link href="/forgotPassword">Forgot password?</Link>
          </Typography>

          <Typography variant="small" align="center" as="div" className="mt-2">
            <p>Don&apos;t have an account yet? </p>
            <Link href="/signup">Signup for free!</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
