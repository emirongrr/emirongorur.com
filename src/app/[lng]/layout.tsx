import { dir } from "i18next";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { Navbar } from "@components/Navbar";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { gitlabmono, incognito } from "../../../public/fonts/font";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emir Öngörür | Computer engineer, technical writer & open-source contributor",
  description:
    "An experienced software developer passionate about learning and building open-source software. I love the Ethereum ecosystem, distributed systems, math, cryptography, compilers design, philosophy, finance, and economy.",
  url: "https://www.emirongorur.com",
  mainEntityOfPage: "https://www.emirongorur.com",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Portfolio",
      item: "https://www.emirongorur.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://blog.emirongorur.com",
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
    {
      "@type": "ListItem",
      position: 5,
      name: "Resume",
      item: "https://www.emirongorur.com/assets/resume.pdf",
    },
  ],
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export const metadata: Metadata = {
  title: "Emir Öngörür | Portfolio",
  authors: [{ name: "Emir Öngörür" }],
  creator: "Emir Öngörür",
  publisher: "Emir Öngörür",
  description:
    "Discover Emir Öngörür's portfolio projects, skills, and experience in software development.",
  openGraph: {
    title: "Emir Öngörür | Portfolio",
    description:
      "Discover Emir Öngörür's portfolio projects, skills, and experience in software development.",
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
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "emir öngörür",
    "emir ongorur",
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
    title: "Emir Öngörür | Portfolio",
    description:
      "Discover Emir Öngörür's portfolio projects, skills, and experience in software development.",
    images: ["https://www.emirongorur.com/api/og"],
  },
  metadataBase: new URL("https://www.emirongorur.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en': "/en",
      'tr': "/tr",
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
      <head>
        <title>{metadata.title}</title>
        
      </head>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar lng={lng} />
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
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
