import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo: string;
  coverImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  description: string;
};

const dummyProjects: ProjectType[] = [
  {
    _id: "1",
    name: "BiFrost",
    slug: "bifrost",
    tagline: "A new paradigm for banks",
    projectUrl: "loaneth.vercel.app",
    repository: "https://github.com/emirongrr/bifrost",
    logo: "",
    coverImage: {
      image: "https://example.com/cover1.png",
      alt: "Cover image for Project One",
      lqip: "base64EncodedLQIP1",
    },
    description: "a new paradigm for banks",
  },
  {
    _id: "2",
    name: "Social Network Analysis Book Series",
    slug: "Social network analysis Game of Thrones",
    tagline:
      "Analyzing the interactions between characters can unveil hidden patterns.",
    projectUrl: "",
    repository:
      "https://github.com/emirongrr/Social-Network-Analysis-Game-of-Thrones",
    logo: "",
    coverImage: {
      image: "https://example.com/cover2.png",
      alt: "Cover image for Project Two",
      lqip: "base64EncodedLQIP2",
    },
    description: "SNA Game Of Thrones",
  },
  {
    _id: "3",
    name: "Ethereum Rust Execution Client",
    slug: "ethereum-rust-execution-client",
    tagline: "Ethereum rust execution client",
    projectUrl: "",
    repository: "https://github.com/emirongrr/ethereum_rust",
    logo: "",
    coverImage: {
      image: "https://example.com/cover2.png",
      alt: "Cover image for Project Two",
      lqip: "base64EncodedLQIP2",
    },
    description: "Ethereum Rust Execution Client",
  },
];

async function sanityFetch({
  query,
  tags,
}: {
  query: string;
  tags: string[];
}): Promise<ProjectType[]> {
  console.log("Simulating fetch with query:", query, "and tags:", tags);
  return dummyProjects;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await sanityFetch({
        query: "projectsQuery",
        tags: ["project"],
      });
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <div className="dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className=" mx-auto lg:max-w-7xl flex  items-start justify-start  min-h-[100vh] overflow-hidden">
          <div className=" flex flex-col gap-6 mt-24">
            <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl w-full lg:leading-[3.7rem] px-12 lg:px-12 xl:px-0">
              Projects & Open-Source contributions
            </h1>
            <p className="max-w-5xl text-base dark:text-zinc-300 text-zinc-600 leading-relaxed px-12 lg:px-12 xl:px-0">
              I&apos;ve tackled a range of projects over the years, but these
              are the ones that truly stand out. They reflect my skills in Rust,
              my commitment to open-source contributions, and my deep interest
              in the Ethereum ecosystem. I&apos;d love for you to contribute any
              ideas for improvements, especially if you share a passion for
              Ethereum development.
            </p>

            {projects.length > 0 ? (
              <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12 px-12 lg:px-12 xl:px-0">
                {projects.map((project) => (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={project._id}
                    className="flex items-center gap-x-4 dark:bg-[#080808] transition-all bg-zinc-50  border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
                  >
                    {project.logo ? (
                      <Image
                        src={""}
                        width={60}
                        height={60}
                        alt={project.name}
                        className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                      />
                    ) : (
                      <div className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 rounded-lg text-3xl">
                        🪴
                      </div>
                    )}
                    <div>
                      <h2 className="text-lg tracking-wide mb-1">
                        {project.name}
                      </h2>
                      <div className="text-sm dark:text-zinc-400 text-zinc-600">
                        {project.tagline}
                      </div>
                    </div>
                  </Link>
                ))}
              </section>
            ) : (
              <div>Empty state</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
