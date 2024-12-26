import { dir } from "i18next";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { Navbar } from "@components/Navbar";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { gitlabmono, incognito } from "../assets/fonts/font";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Head from "next/head";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export const metadata: Metadata = {
  title: "Emir Öngörür | Portfolio",
  description: "Discover Emir Öngörür's portfolio: projects, skills, and experience in software development.",
  openGraph: {
    title: "Emir Öngörür | Portfolio",
    description: "Discover Emir Öngörür's portfolio: projects, skills, and experience in software development.",
    url: "https://www.emirongorur.com",
    images: [
      {
        url: "https://www.emirongorur.com/api/og",
        alt: "Emir Öngörür Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emir Öngörür | Portfolio",
    description: "Discover Emir Öngörür's portfolio: projects, skills, and experience in software development.",
    images: ["https://www.emirongorur.com/api/og"],
  },
  alternates: {
    languages: {
      en: "https://www.emirongorur.com/en",
      tr: "https://www.emirongorur.com/tr",
    },
  },
};
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
    description: t("siteContent"),
    searchEngine: t("searchEngine"),
    url: "https://emirongorur.com",
    image: "https://emirongorur.com/api/og",
  };

  return (
    <html id="home" className="dark" lang={lng} dir={dir(lng)}>
      <Head>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/80769968?v=4.png"
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/80769968?v=4.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metadata.title}></meta>
        <meta property="twitter:description" content={metadata.description} />
        <meta property="description" content={metadata.searchEngine} />
        <meta property="og:site_name" content={metadata.title} />

        <title>{metadata.title}</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/80769968?v=4.png"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
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
