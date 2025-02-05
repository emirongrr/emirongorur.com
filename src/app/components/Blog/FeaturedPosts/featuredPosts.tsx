"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { PostType } from "../Types/table";
import { sanityFetch } from "../../../../sanity/lib/client";
import { postsQuery } from "../../../../sanity/lib/sanity.query";

export default function FeaturedPosts({
  lng,
  params,
}: {
  lng: string;
  params?: string;
}) {
  const [featuredPosts, setFeaturedPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const posts = (await sanityFetch({
          query: postsQuery,
          qParams: { lang: lng },
          tags: ["Post"],
        })) as PostType[];

        setFeaturedPosts(posts);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load posts.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, [lng]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {featuredPosts.map((post) =>
        post.featured !== true || post.isPublished !== true ? null : (
          <article
            key={post._id}
            className={`mb-4 ${post.slug === params ? "hidden" : "flex lg:flex-row flex-col"}`}
          >
            <Link
              href={`/${lng}/${post.slug}`}
              className="flex flex-col gap-4 dark:bg-primary-bg bg-secondary-bg p-5 rounded-lg border dark:border-zinc-800 border-zinc-200"
            >
              <Image
                src={post.coverImage?.image}
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
                alt={post.coverImage?.alt || post.title}
                width={400}
                height={230}
                placeholder={post.coverImage ? "blur" : "empty"}
                blurDataURL={post.coverImage?.lqip || ""}
                quality={100}
                priority
              />
              <div className="max-w-lg">
                <h2 className="max-w-sm text-lg tracking-tight mb-4">
                  {post.title}
                </h2>
                <p className="dark:text-zinc-400 text-zinc-600 text-sm">
                  {post.description.slice(0, 80).padEnd(83, "...")}
                </p>
              </div>
            </Link>
          </article>
        ),
      )}
    </>
  );
}
