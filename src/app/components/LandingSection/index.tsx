import { useTranslation } from "../../i18n";
import LandingSectionBase from "./LandingHeroBase";

export const LandingSection = async ({ lng }: { lng: string }) => {
  const { i18n } = await useTranslation(lng, "landing");
  const t = i18n.getFixedT(lng, "landing");

  return (
    <LandingSectionBase
      title={t("landingTitle")}
      content={t("landingContent")}
      logoAlt={t("landingLogoAlt")}
    />
  );
};
