import RefLink from "@components/RefLink";
import SkillsSection from "@components/SkillsSection";
import { Metadata } from "next";
import Image from "next/image";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { i18n } from "i18next";

export const metadata: Metadata = {
  title: "About | Emir Öngörür",
  metadataBase: new URL("https://emirongorur.com/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Emir Öngörür",
    url: "https://emirongorur.com/about",
    description:
      "Learn more about my skills, experience and technical background",
    images: "https://avatars.githubusercontent.com/u/80769968?v=4",
  },
};

const AboutMeSectionBase = ({ i18n, lng }: { i18n: i18n; lng: string }) => {
  const t = i18n.getFixedT(lng, "about");
  return (
    <section
      id="about"
      className="bg-[#000] flex justify-center items-center w-full min-h-screen overflow-hidden"
    >
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
                  alt={"profile image"}
                  placeholder="blur"
                  blurDataURL={"data.profileImage.lqip"}
                  priority
                />

                <div className="flex flex-col text-center gap-y-4 mt-4">
                  <div className="max-w-[500px] flex justify-center gap-x-4">
                    <RefLink
                      href=""
                      className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-[#080808] bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      {t("viewResume")} <BiLinkExternal className="text-base" />
                    </RefLink>
                    <a
                      href={`${"data.resumeURL"}?dl=${"data.fullName"}-resume`}
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
                    href={`mailto:info@emirongorur.com`}
                    className="flex items-center gap-x-2 hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    {"info@emirongorur.com"}
                  </a>
                </div>
              </div>
            </aside>

            {/* text */}
            <div className="flex flex-col w-full lg:w-[60%] p-6">
              <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/4 p-6">
                {t("aboutTitle")}
              </h1>
              <p className="p-6 h-full">{t("aboutContent")}</p>
            </div>
          </section>
        </div>

        {/* skills */}
        <div className="w-full h-[30%] min-h-[300px]">
          <SkillsSection title={t("technologiesSkills")} />
        </div>
      </main>
    </section>
  );
};

export default AboutMeSectionBase;
