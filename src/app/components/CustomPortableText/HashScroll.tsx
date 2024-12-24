import Link from "next/link";

type Props = {
  text: React.ReactNode; 
  event?: React.MouseEventHandler<HTMLAnchorElement>; 
};

export const slugify = (id: string): string => {
  if (id) {
    return id
      .toString()
      .toLowerCase()
      .replaceAll(/[^-\w]+/g, "-")
      .replaceAll(/--+/g, "-")
      .replace(/^-|-$/g, "");
  }
  return ""; 
};

export default function HashScroll({ text, event }: Props) {
  const slug = slugify(text?.toString() ?? "");

  return (
    <Link
      onClick={event}
      href={`#${slug}`}
    >
      {text}
    </Link>
  );
}
