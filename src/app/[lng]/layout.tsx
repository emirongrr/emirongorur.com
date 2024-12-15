import { dir } from "i18next";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { Navbar } from "@components/Navbar";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { gitlabmono, incognito } from "../assets/fonts/font";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  const { t } = await useTranslation(lng, "common");

  const metadata = {
    title: t("siteTitle"),
    content: t("siteContent"),
    metadataBase: new URL("https://emirongorur.com"),
  };

  return (
    <html id="home" className="dark" lang={lng} dir={dir(lng)}>
      <head>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.content} />
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar lng={lng} />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
