import { ICON_MEDIUM } from "@/constants/ui";
import { Eye, EyeOff } from "lucide-react";
import {
  ComponentProps,
  forwardRef,
  InputHTMLAttributes,
  PropsWithoutRef,
} from "react";
import { tv } from "tailwind-variants";
import { Typography } from "./typography";

export const textInputVariants = tv({
  base: "rounded-full w-full bg-background-ternary px-4 py-2",
});

export const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, children, ...props }, ref) => {
  return (
    <Typography variant="h3" as="div">
      <input ref={ref} className={textInputVariants({ className })} {...props}>
        {children}
      </input>
    </Typography>
  );
});
TextInput.displayName = "TextInput";

export interface PasswordInputProps
  extends Omit<PropsWithoutRef<ComponentProps<typeof TextInput>>, "type"> {
  showPassword?: boolean;
  onShowPasswordChange?: (newShowPassword: boolean) => void;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showPassword, onShowPasswordChange = () => {}, ...props }, ref) => {
    const Icon = showPassword ? EyeOff : Eye;
    const type = showPassword ? "text" : "password";

    const handleShowPasswordChange = () => {
      onShowPasswordChange(!showPassword);
    };

    return (
      <div className="relative">
        <TextInput ref={ref} type={type} {...props} />
        <Icon
          size={ICON_MEDIUM}
          onClick={handleShowPasswordChange}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        />
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export const Input = {
  Text: TextInput,
  Password: PasswordInput,
};
