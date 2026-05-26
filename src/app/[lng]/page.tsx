import { LandingSection } from "@components/LandingSection";
import { AboutMeSection } from "@components/AboutMeSection";
import { ProjectsSection } from "@components/ProjectsSection";
import { languages, fallbackLng } from "../i18n/settings";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "../lib/seo";

export function generateMetadata({ params }: { params: { lng: string } }) {
  return buildPageMetadata(params.lng, "home");
}

export default function Home({
  params,
}: {
  params: {
    lng: string;
  };
}) {
  const lng = languages.includes(params.lng) ? params.lng : fallbackLng;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(lng, "home");

  return (
    <section className="min-h-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <LandingSection lng={lng} />
      <AboutMeSection lng={lng} />
      <ProjectsSection lng={lng} />
    </section>
  );
}
