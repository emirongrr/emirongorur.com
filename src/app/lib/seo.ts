import type { Metadata } from "next";
import { Locale, routeMetadata, siteConfig } from "../config/site";
import { getNavigationItems } from "../config/navigation";

type RouteKey = keyof (typeof routeMetadata)["en"];

export function getLocale(lng: string): Locale {
  return lng === "tr" ? "tr" : "en";
}

export function buildPageMetadata(lng: string, route: RouteKey): Metadata {
  const locale = getLocale(lng);
  const page = routeMetadata[locale][route];
  const canonical = `${siteConfig.url}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical,
      languages: {
        en: routeMetadata.en[route].path,
        tr: routeMetadata.tr[route].path,
        "x-default": routeMetadata.en[route].path,
      },
    },
    openGraph: {
      type: "website",
      locale,
      siteName: `${siteConfig.name} Portfolio`,
      title: page.title,
      description: page.description,
      url: canonical,
      images: [
        {
          url: "/api/og",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/api/og"],
      creator: "@emirongorur",
    },
  };
}

export function buildSiteJsonLd(lng: string) {
  const locale = getLocale(lng);
  const navigationItems = getNavigationItems(locale);

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: `${siteConfig.name} Portfolio`,
      url: siteConfig.url,
      inLanguage: locale,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: "Computer Engineer",
      email: `mailto:${siteConfig.email}`,
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.x,
        siteConfig.social.farcaster,
        siteConfig.blogUrl,
      ],
      knowsAbout: [
        "Ethereum",
        "Blockchain",
        "Rust",
        "TypeScript",
        "Next.js",
        "Distributed systems",
        "Zero-knowledge proofs",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: navigationItems.map((item) => item.title),
      url: navigationItems.map((item) =>
        item.external ? item.href : `${siteConfig.url}${item.href}`,
      ),
    },
  ];
}

export function buildBreadcrumbJsonLd(lng: string, route: RouteKey) {
  const locale = getLocale(lng);
  const page = routeMetadata[locale][route];
  const labels = {
    home: locale === "tr" ? "Anasayfa" : "Home",
    about: locale === "tr" ? "Hakkımda" : "About",
    projects: locale === "tr" ? "Projeler" : "Projects",
  };

  const elements = [
    {
      "@type": "ListItem",
      position: 1,
      name: labels.home,
      item: `${siteConfig.url}/${locale}`,
    },
  ];

  if (route !== "home") {
    elements.push({
      "@type": "ListItem",
      position: 2,
      name: labels[route],
      item: `${siteConfig.url}${page.path}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: elements,
  };
}
