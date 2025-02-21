import { PropsWithChildren, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

export function ProfileActionsList({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2 container max-w-[200px] mx-auto">
      {children}
    </div>
  );
}

export const profileActionsItemVariants = tv({
  base: "flex gap-4 items-center",
  variants: {
    variant: {
      default: "",
      destructive: "text-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ProfileActionsItemProps
  extends VariantProps<typeof profileActionsItemVariants> {
  children?: ReactNode;
}

export function ProfileActionsItem({
  variant,
  children,
}: ProfileActionsItemProps) {
  return (
    <div className={profileActionsItemVariants({ variant })}>{children}</div>
  );
}

export const ProfileActions = {
  List: ProfileActionsList,
  Item: ProfileActionsItem,
};
