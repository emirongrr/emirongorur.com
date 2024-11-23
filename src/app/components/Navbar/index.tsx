import { useTranslation } from "../../i18n";
import NavbarBase from "./NavbarBase";

export const Navbar = async ({ lng, path }: { lng: string; path?: string }) => {
  const { t, i18n } = await useTranslation(lng, "common");
  return <NavbarBase i18n={i18n} lng={lng} path={path} />;
};
