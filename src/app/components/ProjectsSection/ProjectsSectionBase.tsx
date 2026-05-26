import Image from "next/image";
import { sanityFetch } from "../../../sanity/lib/client";
import { ProjectType } from "../../types";
import { projectsQuery } from "../../../sanity/lib/sanity.query";
import { Slide } from "@components/Animation/Slide";

const portfolioUrl = "https://emirongorur.com?ref=emirongorur.com";
const ethrexUrl =
  "https://github.com/lambdaclass/ethrex/commits/main/?author=emirongrr";

const ProjectsSectionBase = async ({
  title,
  content,
  portfolioDescription,
  ethrexDescription,
  headingLevel,
}: {
  title: string;
  content: string;
  portfolioDescription: string;
  ethrexDescription: string;
  headingLevel: "h1" | "h2";
}) => {
  const Heading = headingLevel;
  const ProjectHeading = headingLevel === "h1" ? "h2" : "h3";
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });
  const featuredProjects = projects
    .map((project) => {
      const normalizedName = project.name.toLowerCase();

      if (normalizedName.includes("portfolio")) {
        return {
          ...project,
          href: portfolioUrl,
          tagline: portfolioDescription,
        };
      }

      if (normalizedName.includes("ethereum rust execution client")) {
        return {
          ...project,
          href: ethrexUrl,
          tagline: ethrexDescription,
        };
      }

      return null;
    })
    .filter((project): project is ProjectType & { href: string } =>
      Boolean(project),
    );

  return (
    <section id="projects"> 
      <div className="dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="mx-auto flex min-h-[100vh] w-full max-w-3xl items-start justify-start overflow-hidden px-6 lg:max-w-7xl">
          <div className="flex w-full flex-col gap-6 mt-16">
            <Heading className="mt-24 font-incognito font-semibold tracking-tight sm:text-5xl text-3xl w-full lg:leading-[3.7rem]">
              {title}
            </Heading>
            <p className="max-w-5xl text-base dark:text-zinc-300 text-zinc-600 leading-relaxed">
              {content}
            </p>
            <Slide delay={0.1}>
              {featuredProjects.length > 0 ? (
                <section className="grid max-w-5xl grid-cols-1 gap-5 mb-12 md:grid-cols-2">
                  {featuredProjects.map((project) => (
                    <a
                      key={project._id}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[155px] items-center gap-x-4 dark:bg-[#080808] transition-all bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-5 rounded-lg"
                    >
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          width={60}
                          height={60}
                          alt={project.name}
                          className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                          loading="lazy"
                        />
                      ) : (
                        <div className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 rounded-lg text-3xl">
                          🪴
                        </div>
                      )}
                      <div>
                        <ProjectHeading className="text-lg tracking-wide mb-1">
                          {project.name}
                        </ProjectHeading>
                        <div className="text-sm dark:text-zinc-400 text-zinc-600">
                          {project.tagline}
                        </div>
                      </div>
                    </a>
                  ))}
                </section>
              ) : (
                <div>Empty state</div>
              )}
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionBase;
