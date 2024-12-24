import React from "react";
import Image from "@components/Blog/BlogImage/Image";

const BlogFeaturedDefaultHero: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border shadow-lg dark:border-neutral-700">
      <div
        className="group relative duration-500"
        style={{
          height: "400px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/assets/default.webp"
          alt="emirongorur-blog"
          sizes="100vw, 100vh"
          fill={true}
          className="h-full w-full transform object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default BlogFeaturedDefaultHero;
