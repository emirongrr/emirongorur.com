import { useTranslation } from "../../i18n";
import ProjectsSectionBase from "./ProjectsSectionBase";

export const ProjectsSection = async ({
  lng,
  headingLevel = "h2",
}: {
  lng: string;
  headingLevel?: "h1" | "h2";
}) => {
  const { i18n } = await useTranslation(lng, "projects");
  const t = i18n.getFixedT(lng, "projects");

  return (
    <ProjectsSectionBase
      title={t("projectsTitle")}
      content={t("projectsContent")}
      portfolioDescription={t("portfolioDescription")}
      ethrexDescription={t("ethrexDescription")}
      headingLevel={headingLevel}
    />
  );
};
