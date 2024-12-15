'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import EmptyState from '../EmptyState';
import SearchBar from '../SearchBar';
import BlogCardNewSkeleton from '../Skeleton/BlogCardNewSkeleton';
import BlogFeaturedSection from '../BlogComponents/BlogFeaturedSection';
import { PostType } from '../Types/table';
import { sanityFetch } from '../../../../sanity/lib/client';
import { postsQuery } from '../../../../sanity/lib/sanity.query';
import BlogCardNew from '../BlogComponents/BlogCardNew';

const BlogListNew = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const fetchedPosts: PostType[] = await sanityFetch({
          query: postsQuery,
          tags: ['Post'],
        });
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const total_posts = posts.length;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    setPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setPage(1);
  };

  const renderEmptyState = () =>
    !isLoading && posts.length === 0 && <EmptyState message="No Post Found." />;

  return (
    <div className="space-y-10">
      <BlogFeaturedSection />

      <div className="space-y-5">
        <div className="mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2 px-1 text-xl font-medium">
            {searchTerm ? (
              <div>
                <span className="mr-2 text-neutral-600 dark:text-neutral-400">Search:</span>
                <span className="italic">{searchTerm}</span>
              </div>
            ) : (
              <h4 className="text-neutral-800 dark:text-neutral-200">Latest Articles</h4>
            )}
            <span className="rounded-full bg-neutral-300 px-2 py-1 text-xs text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50">
              {total_posts}
            </span>
          </div>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
            onClearSearch={handleClearSearch}
          />
        </div>

        <div
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 `}
        >
          {isLoading ? (
            <>
              {new Array(3).fill(0).map((_, index) => (
                <BlogCardNewSkeleton key={index} />
              ))}
            </>
          ) : posts.length > 0 ? (
            posts.map((item, index) => {

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
