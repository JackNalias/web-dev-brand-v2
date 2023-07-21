"use server";

import { cookies } from "next/dist/client/components/headers";

export default async function toggleTheme() {
  const currentTheme = cookies().get("theme");
  if (currentTheme?.value === "dark") {
    cookies().set("theme", "light");
  } else {
    cookies().set("theme", "dark");
  }
}
