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
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "Portfolio",
      "position": 1,
      "name": "Portfolio",
      "item": "https://www.emirongorur.com"
    },
    {
      "@type": "Blog",
      "position": 2,
      "name": "Blog",
      "item": "https://blog.emirongorur.com"
    },
    {
      "@type": "Github",
      "position": 3,
      "name": "Github",
      "item": "https://github.com/emirongrr"
    },    {
      "@type": "X",
      "position": 3,
      "name": "x",
      "item": "https://x.com/emirongorur"
    }
  ]
};


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
    url: "https://www.emirongorur.com",
    image: "https://emirongorur.com/api/og",
  };

  return (
    <html id="home" className="dark" lang={lng} dir={dir(lng)}>
      <Head>
      <title>{metadata.title}</title>
      <meta name="apple-mobile-web-app-title" content="emirongorur" />
      <link rel="canonical" href={metadata.url} />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

      </Head>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar lng={lng} />
          {children}
          <Analytics />
          <GoogleAnalytics gaId="G-YW4S269HQB" />
        </Providers>
      </body>
    </html>
  );
}
