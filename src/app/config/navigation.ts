import { Locale, routeLabels, siteConfig } from "./site";

export type NavigationItem = {
  title: string;
  href: string;
  external?: boolean;
};

export function getNavigationItems(lng: string): NavigationItem[] {
  const locale = lng === "tr" ? "tr" : "en";
  const labels = routeLabels[locale as Locale];

  return [
    {
      title: labels.home,
      href: `/${locale}`,
    },
    {
      title: labels.about,
      href: `/${locale}/about`,
    },
    {
      title: labels.projects,
      href: `/${locale}/projects`,
    },
    {
      title: labels.blog,
      href: `${siteConfig.blogUrl}/${locale}`,
      external: true,
    },
  ];
}
