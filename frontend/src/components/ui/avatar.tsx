import { Avatar as AvatarPrimitive } from "radix-ui";

export type AvatarProps = {
  image?: string;
  alt?: string;
  initials?: string;
};

export function Avatar({ image, alt, initials }: AvatarProps) {
  return (
    <AvatarPrimitive.Root className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full">
      <AvatarPrimitive.Image src={image} alt={alt} />
      <AvatarPrimitive.Fallback>
        {initials?.toLocaleUpperCase()}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
