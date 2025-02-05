"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";
import { giscusCategoryId, giscusRepoId } from "../../../sanity/env";

type CommentsProps = {
  lng: string;
};

export default function Comments({ lng }: CommentsProps) {
  const theme = useTheme();
  const giscusTheme =
    theme.theme === "light"
      ? "light"
      : theme.theme === "dark"
        ? "transparent_dark"
        : "dark";

  return (
    <Giscus
      id="comments"
      repo="emirongrr/emirongorur.com"
      repoId={giscusRepoId}
      category="Announcements"
      categoryId={giscusCategoryId}
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={giscusTheme}
      lang={lng}
      loading="lazy"
    />
  );
}
