import { AboutMeSection } from "@components/AboutMeSection";
import { languages, fallbackLng } from "../../i18n/settings";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "../../lib/seo";

export function generateMetadata({ params }: { params: { lng: string } }) {
  return buildPageMetadata(params.lng, "about");
}

export default function About({
  params,
}: {
  params: {
    lng: string;
  };
}) {
  const lng = languages.includes(params.lng) ? params.lng : fallbackLng;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(lng, "about");

  return (
    <section className="min-h-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <AboutMeSection lng={lng} />
    </section>
  );
}
