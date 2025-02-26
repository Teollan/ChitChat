import { ButtonHTMLAttributes, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "",
  variants: {
    variant: {
      accent: "text-foreground-primary bg-accent-primary rounded-full",
      ghost: "",
    },
    formFactor: {
      full: "",
      fit: "w-max px-4 py-2",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "accent",
    formFactor: "fit",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, formFactor, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, formFactor, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
