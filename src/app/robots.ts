import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/assets/resume.pdf"],
      },
    ],
    sitemap: "https://emirongorur.com/sitemap.xml",
  };
}
