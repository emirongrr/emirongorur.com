"use client";
import SkillsSection from "@components/SkillsSection";
import Image from "next/image";
import { BiEnvelope } from "react-icons/bi";
import { BiLinkExternal } from "react-icons/bi";
import { BiSolidDownload } from "react-icons/bi";
import Link from "next/link";
import { Slide } from "@components/Animation/Slide";

const AboutMeSectionBase = ({
  title,
  content,
  viewResume,
  technologiesSkills,
  headingLevel,
}: {
  title: string;
  content: string;
  viewResume: string;
  technologiesSkills: string;
  headingLevel: "h1" | "h2";
}) => {
  const Heading = headingLevel;
  const skillsHeadingLevel = headingLevel === "h1" ? "h2" : "h3";
  const [mainContent, quoteContent] = content.split("\n\n> ");
  const paragraphs = mainContent.split("\n\n");

  return (
    <section
      id="about"
    >
      <Slide delay={0.1}>
        <div className="bg-white dark:bg-[#000]"
        >
        <main className="w-full mx-auto min-h-screen lg:max-w-7xl max-w-3xl overflow-hidden">
          <div className="min-h-[70%] mt-24">
            <section className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:items-start">
              {/* photo */}
              <aside className="flex flex-col items-center px-6 py-0 w-full lg:col-start-2 lg:pt-4">
                <div className="lg:sticky lg:top-24 w-full max-w-[500px]">
                  <Image
                    className="rounded-2xl mb-4 object-cover  min-h-96 bg-top"
                    src={"/assets/80769968.png"}
                    width={500}
                    height={500}
                    quality={100}
                    alt={"Emir Öngörür profile"}
                    placeholder="blur"
                    blurDataURL={"data.profileImage.lqip"}
                    loading="lazy"
                  />

                  <div className="flex flex-col text-center gap-y-4 mt-4">
                    <div className="max-w-[500px] flex justify-center gap-x-4">
                      <Link
                        href="/assets/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-[#080808] bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                      >
                        {viewResume}{" "}
                        <BiLinkExternal className="text-base" />
                      </Link>
                      <a
                        href="/assets/resume.pdf"
                        download="Emir_Ongorur_Resume.pdf"
                        className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-[#080808] bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                        title="Download Resume"
                      >
                        <BiSolidDownload
                          className="text-lg"
                          aria-label="Download Resume"
                        />
                      </a>
                    </div>
                    <a
                      href="mailto:&#105;&#110;&#102;&#111;&#64;&#101;&#109;&#105;&#114;&#111;&#110;&#103;&#111;&#114;&#117;&#114;&#46;&#99;&#111;&#109;"
                      className="flex items-center gap-x-2 hover:text-primary-color"
                      aria-label="email me"
                    >
                      <BiEnvelope className="text-lg" />
                      {"info@emirongorur.com"}
                    </a>
                  </div>
                </div>
              </aside>

              {/* text */}
              <div className="flex flex-col w-full px-6 py-0 lg:col-start-1 lg:row-start-1">
                <Heading className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/4">
                  {title}
                </Heading>
                <div className="flex flex-col gap-5 pt-12 pb-12 h-full">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {quoteContent ? (
                    <blockquote className="border-l-4 border-zinc-600 pl-6 text-lg leading-relaxed text-zinc-100">
                      “{quoteContent}”
                    </blockquote>
                  ) : null}
                </div>
              </div>
            </section>
          </div>

          {/* skills */}
          <div className="w-full h-[30%] min-h-[300px]">
            <SkillsSection
              title={technologiesSkills}
              headingLevel={skillsHeadingLevel}
            />
          </div>
        </main>
        </div>
      </Slide>
    </section>
  );
};

export default AboutMeSectionBase;
