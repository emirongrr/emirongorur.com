import { dir } from "i18next";
import { languages, fallbackLng } from "../i18n/settings";
import { Navbar } from "@components/Navbar";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { gitlabmono, incognito } from "../../../public/fonts/font";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { buildPageMetadata, buildSiteJsonLd } from "../lib/seo";
import { siteConfig } from "../config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export function generateMetadata({ params }: { params: { lng: string } }) {
  return {
    ...buildPageMetadata(params.lng, "home"),
    metadataBase: new URL(siteConfig.url),
    applicationName: `${siteConfig.name} Portfolio`,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    other: {
      "apple-mobile-web-app-title": `${siteConfig.name} Portfolio`,
    },
  };
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
  const siteJsonLd = buildSiteJsonLd(lng);

  return (
    <html id="home" className="dark" lang={lng} dir={dir(lng)}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar lng={lng} />
          <section>
            {siteJsonLd.map((schema, index) => (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(schema),
                }}
              />
            ))}
            {children}
          </section>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
