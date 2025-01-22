import Link from "next/link";
import Theme from "./theme";
import MobileMenu from "./mobilemenu";
import { i18n } from "i18next";
import LanguageSwitcher from "@components/LanguageSwitcher";
import { languages } from "../../i18n/settings";
import Logo from "../../../../public/assets/xi512.png";
import Image from "next/image";

const NavbarBase = ({ i18n, lng }: { i18n: i18n; lng: string }) => {
  const t = i18n.getFixedT(lng, "common");
  const data = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("about"),
      href: "#about",
    },
    {
      title: t("projects"),
      href: "#projects",
    },
    {
      title: t("blog"),
      href: "https://blog.emirongorur.com",
      external: true,
    },
  ];
  const uniqueLanguages = Array.from(new Set(languages));

  return (
    <header className=" sticky top-0 text-sm py-6 md:px-16 px-6 border-b text-zinc-500 border bg-white dark:bg-black dark:border-zinc-800 border-zinc-200 z-30">
      <div className=" max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            width={35}
            height={35}
            alt="logo"
            className="dark:bg-white"
          />
        </Link>

        <nav className="md:block hidden mx-auto">
          <ul className="flex items-center gap-x-8">
            {data.map((link, id) => (
              <li key={id}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-incognito dark:text-white text-black dark:hover:text-zinc-600 hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-white text-black dark:hover:text-zinc-600 hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-x-4">
          <LanguageSwitcher languages={uniqueLanguages} currentLocale={lng} />
          <Theme />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default NavbarBase;
