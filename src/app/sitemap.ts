import type { MetadataRoute } from "next";
import { languages } from "./i18n/settings";
import { routeMetadata, siteConfig, type Locale } from "./config/site";

const lastModified = new Date();
const routes = Object.keys(routeMetadata.en) as Array<keyof typeof routeMetadata.en>;

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lng) =>
    routes.map((route) => ({
      url: `${siteConfig.url}${routeMetadata[lng as Locale][route].path}`,
      lastModified,
      changeFrequency: route === "home" ? "weekly" : "monthly",
      priority: route === "home" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${siteConfig.url}${routeMetadata.en[route].path}`,
          tr: `${siteConfig.url}${routeMetadata.tr[route].path}`,
        },
      },
    })),
  );
}
