// src/app/components/Navbar/index.tsx

import Link from "next/link";
import Theme from "./theme";
import MobileMenu from "./mobilemenu";

const data = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Blog",
    href: "https://blog.emirongorur.com",
    external: true,
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 text-sm py-6 md:px-16 px-6 border-b dark:bg-black dark:border-zinc-800 border-zinc-200 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="#home"></Link>

        <nav className="md:block hidden">
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

        <div className="flex items-center gap-x-4">
          <Theme />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
