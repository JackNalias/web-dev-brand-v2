import { cookies } from "next/dist/client/components/headers";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      height={48}
      width={48}
      className="w-auto h-8"
      src={
        cookies().get("theme")?.value === "dark"
          ? "/white-heart.png"
          : "/black-heart.png"
      }
      alt="logo"
    />
  );
}
