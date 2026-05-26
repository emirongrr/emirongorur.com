import { ProjectsSection } from "@components/ProjectsSection";
import { languages, fallbackLng } from "../../i18n/settings";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "../../lib/seo";

export function generateMetadata({ params }: { params: { lng: string } }) {
  return buildPageMetadata(params.lng, "projects");
}

export default function Projects({
  params,
}: {
  params: {
    lng: string;
  };
}) {
  const lng = languages.includes(params.lng) ? params.lng : fallbackLng;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(lng, "projects");

  return (
    <section className="min-h-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ProjectsSection lng={lng} headingLevel="h1" />
    </section>
  );
}
