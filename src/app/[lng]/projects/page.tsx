"use client";
import { languages, fallbackLng } from "../../i18n/settings";
import { ProjectsSection } from "@components/ProjectsSection";

export default function Projects({
  params,
}: {
  params: {
    lng: string;
  };
}) {
  const lng = languages.includes(params.lng) ? params.lng : fallbackLng;

  return (
    <section className="min-h-3xl">
      <ProjectsSection lng={lng} />
    </section>
  );
}
