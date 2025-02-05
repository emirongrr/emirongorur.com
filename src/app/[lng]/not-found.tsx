"use client";
import { useParams } from "next/navigation";
import NotFoundComponent from "@components/NotFound/notfound";
import { Metadata } from "next";
import { useTranslation } from "../i18n";
import { useEffect, useState } from "react";
import { TranslationResponse } from "@components/Blog/Types/blog";
import type { i18n as I18nType } from "i18next";

export const metadata: Metadata = {
  title: "Post Not Found",
};

export default function NotFoundPage() {
  const [t, setT] = useState<(key: string) => string>(
    () => (key: string) => key,
  );
  const params = useParams<{ lng: string; post: string }>();
  const [i18n, setI18n] = useState<I18nType | null>(null);

  useEffect(() => {
    let isMounted = true;
    useTranslation(params.lng, "notfound").then(
      ({ t, i18n }: TranslationResponse) => {
        if (isMounted) {
          setT(() => t);
          setI18n(i18n);
        }
      },
    );
    return () => {
      isMounted = false;
    };
  }, [params.lng]);

  if (!i18n) return <div>Loading...</div>;

  return (
    <NotFoundComponent
      lng={params.lng}
      title={`${params.post} ${t("NotFound")}`}
      description={t("NotFoundDescription")}
    />
  );
}
