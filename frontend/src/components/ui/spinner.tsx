import { ICON_SMALL } from "@/constants/ui";
import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

interface SpinnerProps extends HTMLAttributes<SVGElement> {
  size?: number;
}

const spinnerVariants = tv({
  base: "border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin",
});

export function Spinner({
  size = ICON_SMALL,
  className,
  ...props
}: SpinnerProps) {
  return (
    <svg
      width={size}
      height={size}
      className={spinnerVariants({ className })}
      {...props}
    ></svg>
  );
}
