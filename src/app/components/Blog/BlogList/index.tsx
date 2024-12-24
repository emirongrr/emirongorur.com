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

type Props = {
  lng: string; 
};

const BlogListNew:NextPage<Props> = ({ lng }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  console.log(lng,"burası")
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const fetchedPosts: PostType[] = await sanityFetch({
          query: postsQuery,
          tags: ["Post"],
        });
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);
  
  const filteredPosts = posts.filter(
    (post: PostType) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.some((block: PortableTextBlock) => {
        if (Array.isArray(block.children)) {
          return block.children.some((child: { text?: string }) =>
            child.text?.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }
        return false;
      }),
  );
  

  const renderEmptyState = () =>
    !isLoading &&
    filteredPosts.length === 0 && <EmptyState message="No Post Found." />;

  return (
    <div className="space-y-10">
      <BlogFeaturedSection />

      <div className="space-y-5">
        <div className="mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2 px-1 text-xl font-medium">
            {searchTerm ? (
              <div>
                <span className="mr-2 text-neutral-600 dark:text-neutral-400">
                  Search:
                </span>
                <span className="italic">{searchTerm}</span>
              </div>
            ) : (
              <h4 className="text-neutral-800 dark:text-neutral-200">
                Latest Articles
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
