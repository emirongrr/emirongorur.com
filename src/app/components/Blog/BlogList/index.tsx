"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import EmptyState from "../EmptyState";
import SearchBar from "../SearchBar";
import BlogCardNewSkeleton from "../Skeleton/BlogCardNewSkeleton";
import BlogFeaturedSection from "../BlogComponents/BlogFeaturedSection";
import { PostType } from "../Types/table";
import { sanityFetch } from "../../../../sanity/lib/client";
import { postsQuery } from "../../../../sanity/lib/sanity.query";
import BlogCardNew from "../BlogComponents/BlogCardNew";
import { PortableTextBlock } from "sanity";
import { NextPage } from "next";
import { useTranslation } from "../../../i18n";
import { TranslationResponse } from "../Types/blog";
import type { i18n as I18nType } from "i18next";

type Props = {
  lng: string;
};

const BlogListNew: NextPage<Props> = ({ lng }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [t, setT] = useState<(key: string) => string>(
    () => (key: string) => key,
  );
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

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const fetchedPosts: PostType[] = await sanityFetch({
          query: postsQuery,
          qParams: { lang: lng },
          tags: ["Post"],
        });
        if (isMounted) setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [lng]);

  if (!i18n)
    return <div className="text-center text-gray-500">{t("Loading")}</div>;

  const filteredPosts = posts.filter((post) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowerSearch) ||
      post.description.toLowerCase().includes(lowerSearch) ||
      post.body.some((block: PortableTextBlock) =>
        Array.isArray(block.children)
          ? block.children.some((child) =>
              child.text?.toLowerCase().includes(lowerSearch),
            )
          : false,
      )
    );
  });

  const renderEmptyState = () =>
    !isLoading &&
    filteredPosts.length === 0 && <EmptyState message={t("NoPostFound")} />;

  return (
    <div className="space-y-10" lang={lng}>
      <BlogFeaturedSection i18n={i18n} lng={lng} />

      <div className="space-y-5">
        <div className="mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2 px-1 text-xl font-medium">
            {searchTerm ? (
              <div>
                <span className="mr-2 text-neutral-600 dark:text-neutral-400">
                  {t("search")}
                </span>
                <span className="italic">{searchTerm}</span>
              </div>
            ) : (
              <h4 className="text-neutral-800 dark:text-neutral-200">
                {t("LatestArticles")}
              </h4>
            )}
            <span className="rounded-full bg-neutral-300 px-2 py-1 text-xs text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50">
              {filteredPosts.length}
            </span>
          </div>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(event) => setSearchTerm(event.target.value)}
            onClearSearch={() => setSearchTerm("")}
            placeholder={t("Placeholder")}
          />
        </div>

        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3`}>
          {isLoading ? (
            <>
              {new Array(3).fill(0).map((_, index) => (
                <BlogCardNewSkeleton key={index} />
              ))}
            </>
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((item, index) => {
              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <BlogCardNew {...item} />
                </motion.div>
              );
            })
          ) : null}
        </div>

        {renderEmptyState()}
      </div>
    </div>
  );
};

export default BlogListNew;
