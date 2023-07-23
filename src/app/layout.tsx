import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import ThemeBtn from "@/components/theme-btn";
import { cookies } from "next/dist/client/components/headers";
import Logo from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zespra | High-Quality Bespoke Websites",
  description:
    "Welcome to Zespra! We specialize in creating bespoke, high-quality websites tailored to your unique business needs. Drive success with our expert team of web developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme");
  return (
    <html lang="en" data-theme={theme?.value} className={theme?.value}>
      <body
        className={
          inter.className +
          " bg-gradient-to-r from-rose-100 to-teal-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:text-white  text-gray-900"
        }
      >
        <Navbar themeBtn={<ThemeBtn />} logo={<Logo />} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
