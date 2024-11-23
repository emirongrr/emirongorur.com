import { useTranslation } from "../../i18n";
import AboutMeSectionBase from "./AboutMeSectionBase";

export const AboutMeSection = async ({
  lng,
  path,
}: {
  lng: string;
  path?: string;
}) => {
  const { t, i18n } = await useTranslation(lng, "about");
  return <AboutMeSectionBase i18n={i18n} lng={lng} path={path} />;
};
