import { dir } from "i18next";
import { languages, fallbackLng } from "../i18n/settings";
import { Navbar } from "@components/Navbar";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { gitlabmono, incognito } from "../assets/fonts/font";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emir Öngörür Blog | Computer engineer, technical writer & open-source contributor",
  description:
    "An experienced software developer passionate about learning and building open-source software. I love the Ethereum ecosystem, distributed systems, math, cryptography, compilers design, philosophy, finance, and economy.",
  url: "https://blog.emirongorur.com",
  mainEntityOfPage: "https://blog.emirongorur.com",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Portfolio",
      item: "https://blog.emirongorur.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.emirongorur.com",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Github",
      item: "https://github.com/emirongrr",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "x",
      item: "https://x.com/emirongorur",
    },
  ],
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export const metadata: Metadata = {
  title: "Emir Öngörür | Blog",
  authors: [{ name: "Emir Öngörür" }],
  creator: "Emir Öngörür",
  publisher: "Emir Öngörür",
  description:
    "Discover Emir Öngörür's portfolio projects, skills, and experience in software development.",
  openGraph: {
    title: "Emir Öngörür | Blog",
    description:
      "Discover Emir Öngörür's portfolio projects, skills, and experience in software development.",
    url: "https://blog.emirongorur.com",
    images: [
      {
        url: "https://blog.emirongorur.com/api/og",
        alt: "Emir Öngörür. Blog.",
        width: 1200,
        height: 630,
      },
    ],
  },
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "emir öngörür",
    "emir öngörür blog",
    "emirongrr",
    "code",
    "javascript",
    "react",
    "next.js",
    "web dev",
    "python",
    "rust",
    "go",
    "blockchain",
    "ethereum",
    "open-source",
    "technical writer",
    "blog",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Emir Öngörür | Blog",
    description:
      "Discover Emir Öngörür's portfolio projects, skills, and experience in software development.",
    images: ["https://blog.emirongorur.com/api/og"],
  },
  metadataBase: new URL("https://blog.emirongorur.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      tr: "/tr",
    },
  },
  other: {
    "apple-mobile-web-app-title": "Emir Öngörür - Blog",
  },
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  return (
    <html id="home" className="dark" lang={lng} dir={dir(lng)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar lng={lng} />{" "}
          <section>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(webpageSchema),
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbSchema),
              }}
            />
            {children}
          </section>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
