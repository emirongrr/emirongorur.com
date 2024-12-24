import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";

type ImageProp = {
  src: {
    alt: string;
    caption: string;
  };
  alt: string;
};


export default function ImageComponent({ src, alt }: ImageProp) {
  const imageUrl = urlFor(src).url();
  const blurUrl = urlFor(src).blur(10).quality(10).url();

  return (
    <Image
      className="rounded-sm object-contain object-left-top aspect-auto duration-300"
      src={imageUrl}
      alt={alt}
      loading="lazy"
      width={1920}
      height={1080}
      placeholder="blur"
      quality={100}
      sizes="100vw"
      blurDataURL={blurUrl}
    />
  );
}
