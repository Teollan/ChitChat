import { Avatar as AvatarPrimitive } from "radix-ui";
import { tv, VariantProps } from "tailwind-variants";

export const avatarVariant = tv({
  base: "flex justify-center items-center bg-blue-600 rounded-full",
  variants: {
    size: {
      small: "w-5 h-5",
      medium: "w-10 h-10 text-xl",
      large: "w-32 h-32 text-6xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export interface AvatarProps extends VariantProps<typeof avatarVariant> {
  image?: string;
  alt?: string;
  initials?: string;
}

export function Avatar({ image, alt, initials, size }: AvatarProps) {
  return (
    <AvatarPrimitive.Root className={avatarVariant({ size })}>
      <AvatarPrimitive.Image src={image} alt={alt} />
      <AvatarPrimitive.Fallback>
        {initials?.toLocaleUpperCase()}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
