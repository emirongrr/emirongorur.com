import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight as MoreIcon } from "react-icons/bs";
import { FaRegEye as ViewIcon } from "react-icons/fa";
import { HiOutlineClock as ClockIcon } from "react-icons/hi";
import { TbCalendarBolt as DateIcon } from "react-icons/tb";
import { PostType } from "../Types/table";
import {
  calculateReadingTime,
  formatDate,
  formatExcerpt,
} from "@components/Helpers";
import Card from "../BlogCard";
import Image from "@components/Blog/BlogImage/Image";
import Breakline from "@components/Breakline/Breakline";
import Tooltip from "./Tooltip";
import { toPlainText } from "next-sanity";

interface BlogCardProps extends PostType {
  isExcerpt?: boolean;
}

const BlogCardNew = ({
  title,
  slug,
  description,
  date,
  coverImage,
  tags,
  body,
  languange,
  isExcerpt = true,
}: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const readingTimeMinutes =
    calculateReadingTime(toPlainText(body), languange) ?? 0;

  const tagList = tags ?? [];

  const slideDownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Link href={`/${languange}/${slug}`}>
      <Card
        className="group relative flex min-h-[400px] w-full flex-col rounded-lg border shadow-sm dark:border-neutral-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cover Image Section */}
        <div
          className="relative rounded-xl duration-500"
          style={{
            height: "400px",
            overflow: "hidden",
          }}
        >
          {coverImage ? (
            <Image
              src={coverImage?.image}
              alt={coverImage?.alt || title || "Blog Cover"}
              fill={true}
              sizes="100vw, 100vh"
              className="h-full w-full transform object-cover object-left transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
            />
          ) : (
            <Image
              src="https://blog.emirongorur.com/api/og"
              alt={title || "Blog Cover"}
              fill={true}
              sizes="100vw, 100vh"
              className="h-full w-full transform object-cover object-left transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-80 transition-opacity duration-300"></div>
        </div>

        {/* Blog Card Content */}
        <div className="absolute flex h-full flex-col justify-between space-y-4 p-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tagList.map((tag, index) => (
              <div
                key={index}
                className="rounded-full bg-neutral-900/50 px-2.5 py-1 font-mono text-xs text-neutral-400"
              >
                <span className="mr-1 font-semibold">#</span>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </div>
            ))}
          </div>

          {/* Title, Date, and Excerpt */}
          <div className="flex flex-col justify-end">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4">
                {title}
              </h3>
              <div className="flex items-center gap-1 text-neutral-400">
                <DateIcon size={14} />
                <span className="ml-0.5 text-xs">
                  {formatDate(date ?? "", "MMMM dd, yyyy", languange)}
                </span>
              </div>
              {isExcerpt && (
                <p className="text-sm leading-relaxed text-neutral-400">
                  {formatExcerpt(description)}
                </p>
              )}
            </div>
            <Breakline className="!border-neutral-700" />

            {/* Footer Icons */}
            <div className="flex justify-between gap-4 px-0.5 text-neutral-400">
              <Tooltip title="Emir Öngörür">
                <Image
                  src="/assets/80769968.png"
                  alt="emir-ongorur"
                  width={25}
                  height={25}
                  rounded="rounded-full"
                  className="rotate-3 border border-neutral-500"
                />
              </Tooltip>

              {/* Views and Reading Time */}
              <motion.div
                variants={slideDownVariants}
                initial="visible"
                animate={isHovered ? "hidden" : "visible"}
                className={clsx(
                  "flex justify-between gap-4",
                  isHovered && "hidden",
                )}
              >
                <div className="flex items-center gap-1">
                  <ViewIcon size={14} />
                  <span className="ml-0.5 text-xs font-medium">VIEWS</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon size={14} />
                  <span className="ml-0.5 text-xs font-medium">
                    {readingTimeMinutes.toLocaleString()} MINS READ
                  </span>
                </div>
              </motion.div>

              {/* Read More Hover Effect */}
              <motion.div
                variants={slideDownVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                className={clsx(
                  "flex items-center gap-1",
                  !isHovered && "hidden",
                )}
              >
                <span className="mr-0.5 text-xs font-medium">READ MORE</span>
                <MoreIcon size={16} />
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

BlogCardNew.defaultProps = {
  isExcerpt: true,
};

export default BlogCardNew;
