import {
  ChapterGroupProps,
  MdxFileContentProps,
} from "@components/Blog/Types/learn";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { enUS, tr } from "date-fns/locale";

interface ParsedUrlProps {
  parentSlug: string;
  contentSlug: string;
}

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5);

export const formatDate = (
  date: string,
  type = "MMMM dd, yyyy",
  lng: string,
) => {
  if (!date) {
    return "";
  }

  const locale = lng === "tr" ? tr : enUS;

  const formattedDate = format(
    formatInTimeZone(date, "Europe/Paris", "yyyy-MM-dd HH:mm:ss zzz"),
    type,
    { locale },
  );
  return formattedDate;
};

export const groupContentByChapter = (
  contents: MdxFileContentProps[],
  lng: string,
): Record<string, ChapterGroupProps> => {
  return contents.reduce(
    (acc, content) => {
      const { frontMatter } = content;

      const chapter_id = frontMatter.chapter_id ?? 0;
      const defaultChapterTitle =
        lng === "tr" ? "gruplandırılmamış" : "ungrouped";
      const chapter_title = frontMatter.chapter_title || defaultChapterTitle;

      if (!acc[chapter_id]) {
        acc[chapter_id] = {
          chapter_id,
          chapter_title,
          contents: [],
        };
      }

      acc[chapter_id].contents.push(content);
      return acc;
    },
    {} as Record<string, ChapterGroupProps>,
  );
};

export const parseUrl = (url: string): ParsedUrlProps => {
  const parts = url.split("/");
  return {
    parentSlug: parts[2],
    contentSlug: parts[3],
  };
};

export const removeHtmlTags = (html: string) => {
  if (typeof DOMParser !== "undefined") {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  } else {
    return html;
  }
};

export const formatExcerpt = (content: string, maxLength = 100) => {
  const cleanedContent = removeHtmlTags(content);

  if (cleanedContent.length <= maxLength) {
    return cleanedContent;
  }

  const trimmed = cleanedContent.substring(0, maxLength).replace(/\s+\S*$/, "");
  return trimmed + (cleanedContent.length > maxLength ? "..." : "");
};

export function calculateReadingTime(words: string, lng: string) {
  const trimString = words.trim();
  const wordsArray = trimString.split(/\s+/);
  const wordCount = wordsArray.length;

  const avgReadTime: number = 185;
  const time = (wordCount / avgReadTime).toFixed(0);

  return lng === "tr" ? `${time} dk` : `${time} min`;
}
