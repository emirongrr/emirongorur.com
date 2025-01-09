import { useTranslation } from "../../i18n";
import LandingSectionBase from "./LandingHeroBase";


export const LandingSection = async ({ lng }: { lng: string }) => {
  const { i18n } = await  useTranslation(lng, "landing");
  return <LandingSectionBase i18n={i18n} lng={lng} />;
};
