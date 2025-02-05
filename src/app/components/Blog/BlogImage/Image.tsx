"use client";

import clsx from "clsx";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";
import cn from "./cn";

type ImageProps = {
  rounded?: string;
  loadingBehavior?: "lazy" | "eager";
} & NextImageProps;

const Image = (props: ImageProps) => {
  const {
    alt,
    src,
    className,
    rounded,
    loadingBehavior = "eager",
    ...rest
  } = props;
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        "overflow-hidden",
        isLoading ? "animate-pulse" : "",
        rounded,
      )}
    >
      <NextImage
        className={cn(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          rounded,
          className,
        )}
        src={src}
        alt={alt}
        loading={loadingBehavior}
        priority={loadingBehavior === "lazy" ? false : true}
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};

export default Image;
