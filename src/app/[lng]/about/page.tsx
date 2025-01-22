"use client";
import { languages, fallbackLng } from "../../i18n/settings";
import { AboutMeSection } from "@components/AboutMeSection";

export default function About({
  params
}: {
  params: {
    lng: string;
  };
}) {
  const lng = languages.includes(params.lng) ? params.lng : fallbackLng;

  return (
    <section className="min-h-3xl">
      <AboutMeSection lng={lng} />
    </section>
  );
}
