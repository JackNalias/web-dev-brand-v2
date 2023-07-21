import toggleTheme from "@/server/theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { cookies } from "next/dist/client/components/headers";

const ThemeBtn = () => {
  return (
    <form action={toggleTheme}>
      <button type="submit">
        {cookies().get("theme")?.value === "dark" ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>
    </form>
  );
};

export default ThemeBtn;
