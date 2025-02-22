import { ComponentProps, forwardRef, PropsWithoutRef } from "react";
import NextLink from "next/link";
import { tv } from "tailwind-variants";

export const linkVariants = tv({
  base: "text-inherit underline hover:text-foreground-primary",
});

export const Link = forwardRef<
  HTMLAnchorElement,
  PropsWithoutRef<ComponentProps<typeof NextLink>>
>(({ className, ...props }, ref) => {
  return (
    <NextLink ref={ref} className={linkVariants({ className })} {...props} />
  );
});
Link.displayName = "Link";
