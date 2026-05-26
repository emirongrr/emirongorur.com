"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  HiBeaker,
  HiBookmarkAlt,
  HiHome,
  HiOutlineX,
  HiUser,
} from "react-icons/hi";
import { getNavigationItems } from "../../config/navigation";

const iconByTitle = {
  Home: HiHome,
  Anasayfa: HiHome,
  About: HiUser,
  Hakkımda: HiUser,
  Projects: HiBeaker,
  Projeler: HiBeaker,
  Blog: HiBookmarkAlt,
};

export default function MobileMenu({ lng }: { lng: string }) {
  const [navShow, setNavShow] = useState(false);
  const data = getNavigationItems(lng).map((item) => ({
    ...item,
    icon: iconByTitle[item.title as keyof typeof iconByTitle] ?? HiHome,
  }));

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${
          navShow ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href={`/${lng}`} onClick={onToggleNav} aria-label="Home" />

          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className={`md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${
              !navShow ? "-rotate-[360deg]" : null
            }`}
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>
        <nav className="mt-6" aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {data.map((link, id) => (
              <li key={id}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Go to ${link.title}`}
                    className="flex font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light items-center gap-x-2 group dark:hover:text-zinc-600 hover:text-zinc-900 p-6"
                  >
                    <link.icon
                      className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                      aria-hidden="true"
                    />
                    {link.title}
                  </a>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group"
                    onClick={onToggleNav}
                    aria-label={`Go to ${link.title}`}
                  >
                    <link.icon
                      className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                      aria-hidden="true"
                    />
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
