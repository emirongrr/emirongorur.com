"use client";
import { languages, fallbackLng } from "../i18n/settings";
import { LandingSection } from "@components/LandingSection";
import { AboutMeSection } from "@components/AboutMeSection";
import { ProjectsSection } from "@components/ProjectsSection";

export default function Home({
  params,
}: {
  params: {
    lng: string;
  };
}) {
  const lng = languages.includes(params.lng) ? params.lng : fallbackLng;

  return (
    <section className="min-h-3xl">
      {/* home */}
      <LandingSection lng={lng} />
      {/* about me */}
      <AboutMeSection lng={lng} />
      {/* projects */}
      <ProjectsSection lng={lng} />
    </section>
  );
}
