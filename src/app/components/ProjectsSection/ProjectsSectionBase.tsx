import Image from "next/image";
import { i18n } from "i18next";
import { sanityFetch } from "../../../sanity/lib/client";
import { ProjectType } from "../../types";
import { projectsQuery } from "../../../sanity/lib/sanity.query";
import { Slide } from "@components/Animation/Slide";

const ProjectsSectionBase = async ({
  i18n,
  lng,
}: {
  i18n: i18n;
  lng: string;
}) => {
  const t = i18n.getFixedT(lng, "projects");
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  return (
    <section id="projects"> 
      <div className="dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="mx-auto lg:max-w-7xl flex items-start justify-start min-h-[100vh] overflow-hidden">
          <div className="flex flex-col gap-6 mt-16">
            <h3 className="mt-24 font-incognito font-semibold tracking-tight sm:text-5xl text-3xl w-full lg:leading-[3.7rem] px-12 lg:px-12 xl:px-0">
              {t("projectsTitle")}
            </h3>
            <p className="max-w-5xl text-base dark:text-zinc-300 text-zinc-600 leading-relaxed px-12 lg:px-12 xl:px-0">
              {t("projectsContent")}
            </p>
            <Slide delay={0.1}>
              {projects.length > 0 ? (
                <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12 px-12 lg:px-12 xl:px-0">
                  {projects.map((project) => (
                    <div
                      key={project._id}
                      className="flex items-center gap-x-4 dark:bg-[#080808] transition-all bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg cursor-pointer"
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
                        <h4 className="text-lg tracking-wide mb-1">
                          {project.name}
                        </h4>
                        <div className="text-sm dark:text-zinc-400 text-zinc-600">
                          {project.tagline}
                        </div>
                      </div>
                    </div>
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
