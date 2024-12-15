import React, { useEffect, useState } from 'react';
import BlogFeaturedHero from './BlogFeaturedHero';
import BlogFeaturedHeroSkeleton from '../Skeleton/BlogFeaturedHeroSkeleton';
import { PostType } from '../Types/table';
import { sanityFetch } from '../../../../sanity/lib/client';
import { featuredPostsQuery } from '../../../../sanity/lib/sanity.query';

const BlogFeaturedSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedData, setDisplayedData] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredData: PostType[] = await sanityFetch({
          query: featuredPostsQuery,
          tags: ['Post'],
        });
      setDisplayedData(featuredData)
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []); 



  return (
    <>        
      {!isLoading ? (
        <BlogFeaturedHero data={displayedData} />
      ) : (
        <BlogFeaturedHeroSkeleton />
      )}
    </>
  );
};

export default BlogFeaturedSection;
