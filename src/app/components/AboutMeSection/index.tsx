import { useTranslation } from "../../i18n";
import AboutMeSectionBase from "./AboutMeSectionBase";

export const AboutMeSection = async ({ lng }: { lng: string }) => {
  const { i18n } = await useTranslation(lng, "about");
  const t = i18n.getFixedT(lng, "about");

  return (
    <AboutMeSectionBase
      title={t("aboutTitle")}
      content={t("aboutContent")}
      viewResume={t("viewResume")}
      technologiesSkills={t("technologiesSkills")}
    />
  );
};
