import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
  icon?: ReactNode;
  headingLevel?: "h2" | "h3";
}

const SectionHeading = ({
  title,
  icon,
  className = "",
  headingLevel = "h3",
}: SectionHeadingProps) => {
  const Heading = headingLevel;

  return (
    <div
      className={`flex items-center gap-1.5 text-xl font-medium text-neutral-800 dark:text-neutral-300 px-12 ${className}`}
    >
      {icon && <>{icon}</>}
      <Heading className="capitalize">{title}</Heading>
    </div>
  );
};

export default SectionHeading;
