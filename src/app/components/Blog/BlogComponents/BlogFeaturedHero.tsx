import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  BiChevronLeft as PrevIcon,
  BiChevronRight as NextIcon,
  BiStar as StarIcon,
} from 'react-icons/bi';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { TbCalendarBolt as DateIcon } from 'react-icons/tb';
import { BlogFeaturedProps } from '../Types/blog';
import Image from "@components/Blog/BlogImage/Image"
import { formatDate, formatExcerpt } from '@components/Helpers';

const BlogFeaturedHero = ({ data }: BlogFeaturedProps) => {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState<number>(0);

  const currentFeatured = data[currentFeaturedIndex];

  const featuredData = data.slice(0, 4);

  const defaultImage = '/images/placeholder.png';

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) =>
      prevIndex === featuredData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) =>
      prevIndex === 0 ? featuredData.length - 1 : prevIndex - 1,
    );
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className='relative overflow-hidden rounded-xl border shadow-lg dark:border-neutral-700'>
      <div
        className='group relative duration-500'
        style={{
          height: '400px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={currentFeatured?.coverImage?.image || defaultImage}
          alt={currentFeatured?.coverImage?.alt || currentFeatured.title }
          fill={true}
          sizes='100vw, 100vh'
          className='h-full w-full transform object-cover transition-transform duration-300'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 transition-opacity duration-300'></div>
      </div>

      <div className='absolute inset-0 z-10 flex w-full justify-between'>
        <div className='flex flex-col justify-between gap-6 p-6 sm:p-8'>
          <div className='flex w-fit items-center gap-x-1 rounded-full bg-lime-200 px-2.5 py-1.5  text-xs text-black'>
            <StarIcon size={16} />
            <span>Featured</span>
          </div>
          <div className='flex flex-col justify-end gap-6'>
            <div className='flex flex-col space-y-2 text-white'>
              <Link
                href={`/blog/${currentFeatured?.slug}?`}
              >
                <h3 className='group relative flex w-fit cursor-pointer  text-2xl font-bold leading-normal'>
                  {currentFeatured?.title}
                  <span className='absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-white transition-transform group-hover:scale-x-100'></span>
                </h3>
              </Link>
              <p className='hidden sm:block'>
                {formatExcerpt(currentFeatured?.description)}
              </p>
              <div className='flex gap-x-5 pt-1 text-neutral-400'>
                <div className='flex items-center gap-1 '>
                  <DateIcon size={16} />
                  <span className='ml-0.5 text-xs'>
                    {formatDate(currentFeatured?._createdAt)}
                  </span>
                </div>
                <div className='flex items-center gap-1'>
                  <ViewIcon size={15} />
                  <span className='ml-0.5 text-[13px]'>
                    100 Views
                  </span>
                </div>
              </div>
            </div>
            <div className='flex gap-2'>
              <button
                onClick={prevFeatured}
                className='h-6 w-6 rounded-md bg-white text-black transition-all duration-300 hover:scale-105 hover:text-neutral-900'
                aria-label='Previous'
              >
                <PrevIcon size={24} />
              </button>
              <button
                onClick={nextFeatured}
                className='h-6 w-6 rounded-md bg-white text-black transition-all duration-300 hover:scale-105 hover:text-neutral-900'
                aria-label='Next'
              >
                <NextIcon size={24} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogFeaturedHero;