import { useTranslation } from "../../i18n";
import LandingSectionBase from "./LandingHeroBase";

export const LandingSection = async ({
  lng,
  path,
}: {
  lng: string;
  path?: string;
}) => {
  const { t, i18n } = await useTranslation(lng, "landing");
  return <LandingSectionBase i18n={i18n} lng={lng} path={path} />;
};
