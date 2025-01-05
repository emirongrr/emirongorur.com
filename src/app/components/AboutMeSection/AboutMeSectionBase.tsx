"use client";
import SkillsSection from "@components/SkillsSection";
import Image from "next/image";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { i18n } from "i18next";
import Link from "next/link";
import { Slide } from "@components/Animation/Slide";

const AboutMeSectionBase = ({ i18n, lng }: { i18n: i18n; lng: string }) => {
  const t = i18n.getFixedT(lng, "about");
  return (
    <section
      id="about"
      className="bg-white dark:bg-[#000] flex justify-center items-center w-full min-h-screen overflow-hidden"
    >
      <Slide delay={0.1}>
        <main className="w-full h-full lg:max-w-7xl max-w-3xl overflow-hidden mt-16">
          <div className="min-h-[70%]">
            <section className="flex flex-col lg:flex-row-reverse h-full">
              {/* photo */}
              <aside className="flex flex-col items-center lg:justify-self-center justify-self-start p-6 w-full lg:w-[40%]">
                <div className="sticky top-10 p-4">
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
                        {t("viewResume")}{" "}
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
              <div className="flex flex-col w-full lg:w-[60%] p-6">
                <h2 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/4 p-6">
                  {t("aboutTitle")}
                </h2>
                <p className="p-6 h-full">{t("aboutContent")}</p>
              </div>
            </section>
          </div>

          {/* skills */}
          <div className="w-full h-[30%] min-h-[300px]">
            <SkillsSection title={t("technologiesSkills")} />
          </div>
        </main>
      </Slide>
    </section>
  );
};

export default AboutMeSectionBase;
