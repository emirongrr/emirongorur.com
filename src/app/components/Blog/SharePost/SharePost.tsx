"use client";

import { i18n as I18nType } from "i18next";
import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { useTranslation } from "../../../i18n";
import { useEffect, useState } from "react";
import { TranslationResponse } from "@components/Blog/Types/blog";

type Props = {
  title: string;
  slug: string;
  description: string;
  lng: string;
};

export default function SharePost({ title, slug, description, lng }: Props) {
  const [t, setT] = useState<(key: string) => string>((key: string) => key);
  const [i18n, setI18n] = useState<I18nType | null>(null);

  useEffect(() => {
    let isMounted = true;
    useTranslation(lng, "common").then(({ t, i18n }: TranslationResponse) => {
      if (isMounted) {
        setT(() => t);
        setI18n(i18n);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [lng]);

  if (!i18n) return null;

  const blog = encodeURIComponent(`https://blog.emirongorur.com/${lng}/`);

  const options = [
    {
      icon: BiLogoTwitter,
      name: "Twitter",
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        "Thank you @emirongrr for writing this post.",
      )}.%0A%0A${title}%0A%0A${blog}${slug}`,
    },
    {
      icon: BiLogoLinkedinSquare,
      name: "LinkedIn",
      shareUrl: `https://linkedin.com/sharing/share-offsite/?url=${blog}${slug}&title=${encodeURIComponent(
        title,
      )}&summary=${encodeURIComponent(description)}`,
    },
    {
      icon: BiLogoWhatsapp,
      name: "WhatsApp",
      shareUrl: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        "Read this amazing article by Emir Öngörür",
      )}.%0A%0A${title}%0A%0A${blog}${slug}`,
    },
  ];

  const openPopup = (url: string) => {
    window.open(
      url,
      "Social Share",
      "width=600,height=600,resizable=yes,scrollbars=yes,status=yes",
    );
  };

  return (
    <section className="border-b dark:border-zinc-800 border-zinc-200 pb-10">
      <h3 className="text-xl font-semibold tracking-tight mb-4">
        {t("SharePost")}
      </h3>

      <div className="flex flex-wrap items-center gap-2 tracking-tight">
        {options.map((data, id) => (
          <button
            key={id}
            onClick={() => openPopup(data.shareUrl)}
            title={`Share to ${data.name}`}
            aria-label={`Share to ${data.name}`}
            className="w-12 h-12 p-2 grid place-content-center text-2xl dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md"
          >
            <data.icon aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}
