import { useTranslation } from "../../i18n";
import ProjectsSectionBase from "./ProjectsSectionBase";

export const ProjectsSection = async ({ lng }: { lng: string }) => {
  const { i18n } = await useTranslation(lng, "projects");
  return <ProjectsSectionBase i18n={i18n} lng={lng} />;
};
