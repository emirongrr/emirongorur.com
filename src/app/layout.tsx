import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import { Providers } from "./provider";
import { gitlabmono, incognito } from "./assets/fonts/font";
import Navbar from "@components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "emirongorur.com",
  metadataBase: new URL("https://emirongorur.com"),
  description: "The website showcases my projects, experience, and blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
        <Navbar/>
        {children}
        </Providers>

      </body>
    </html>
  );
}
