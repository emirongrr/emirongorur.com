"use client";
import { languages, fallbackLng } from "../i18n/settings";


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
      <p>blog {lng} </p>
    </section>
  );
}
