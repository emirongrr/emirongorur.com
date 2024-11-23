import { useTranslation } from "../../i18n";
import AboutMeSectionBase from "./AboutMeSectionBase";

export const AboutMeSection = async ({ lng }: { lng: string }) => {
  const { i18n } = await useTranslation(lng, "about");
  return <AboutMeSectionBase i18n={i18n} lng={lng} />;
};
