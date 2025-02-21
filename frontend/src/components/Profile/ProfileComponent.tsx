import { Suspense } from "react";
import { ProfileDetails } from "./ProfileDetails";

export function ProfileComponent() {
  return (
    <div className="flex flex-col justify-center items-center bg-background-primary h-full">
      <Suspense fallback={<>Loading...</>}>
        <ProfileDetails />
      </Suspense>
    </div>
  );
}
