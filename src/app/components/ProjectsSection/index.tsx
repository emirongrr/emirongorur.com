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
    <div>
      {projects.length > 0 ? (
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
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
                <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
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
  );
};

export default ProjectsSection;
