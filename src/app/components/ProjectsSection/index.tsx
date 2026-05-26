import { useTranslation } from "../../i18n";
import ProjectsSectionBase from "./ProjectsSectionBase";

export const ProjectsSection = async ({ lng }: { lng: string }) => {
  const { i18n } = await useTranslation(lng, "projects");
  const t = i18n.getFixedT(lng, "projects");

  return (
    <ProjectsSectionBase
      title={t("projectsTitle")}
      content={t("projectsContent")}
    />
  );
};
