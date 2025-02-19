import { ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";

const typographyVariants = tv({
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-2xl font-semibold",
      h3: "text-lg font-semibold",
      p: "text-base",
      small: "text-sm text-gray-600",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    leading: {
      none: "leading-none",
      normal: "leading-normal",
    },
  },
  defaultVariants: {
    variant: "p",
    align: "left",
    leading: "normal",
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
}

export function Typography({
  as: Tag = "p",
  variant,
  align,
  children,
  className,
}: TypographyProps) {
  return (
    <Tag className={typographyVariants({ variant, align, className })}>{children}</Tag>
  );
}
