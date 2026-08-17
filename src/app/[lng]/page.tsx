import { LandingSection } from "@components/LandingSection";
import { AboutMeSection } from "@components/AboutMeSection";
import { ProjectsSection } from "@components/ProjectsSection";
import { languages, fallbackLng } from "../i18n/settings";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "../lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  return buildPageMetadata(lng, "home");
}

export default async function Home({
  params,
}: {
  params: Promise<{
    lng: string;
  }>;
}) {
  const { lng: requestedLng } = await params;
  const lng = languages.includes(requestedLng) ? requestedLng : fallbackLng;
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
