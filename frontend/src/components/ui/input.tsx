import { ICON_MEDIUM } from "@/constants/ui";
import { Eye, EyeOff } from "lucide-react";
import {
  ComponentProps,
  forwardRef,
  HTMLAttributes,
  PropsWithoutRef,
} from "react";
import { tv } from "tailwind-variants";

export const textInputVariants = tv({
  base: "",
});

export const TextInput = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement>
>(({ className, children, ...props }, ref) => {
  return (
    <input ref={ref} className={textInputVariants({ className })} {...props}>
      {children}
    </input>
  );
});
TextInput.displayName = "TextInput";

export interface PasswordInputProps
  extends PropsWithoutRef<ComponentProps<typeof TextInput>> {
  showPassword?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showPassword, children, ...props }, ref) => {
    const Icon = showPassword ? EyeOff : Eye;

    return (
      <TextInput ref={ref} {...props}>
        {children}

        <Icon size={ICON_MEDIUM} />
      </TextInput>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export const Input = {
  Text: TextInput,
  Password: PasswordInput,
};
