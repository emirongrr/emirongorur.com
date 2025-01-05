"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";

interface LanguageSwitcherProps {
  languages: string[];
  currentLocale: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  languages,
  currentLocale,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLanguageChange = (language: string) => {
    const newPath = `/${language}${pathname.replace(`/${currentLocale}`, "")}`;
    console.log(newPath);
    router.replace(newPath);
    setIsOpen(false);
  };

  return (
    <div className=" relative inline-block text-left">
      <button
        onClick={toggleMenu}
        aria-label="Language switcher"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
        className="inline-flex justify-center w-full rounded-md border text-zinc-400 dark:border-zinc-800 border-gray-300 shadow-sm px-4 py-2 dark:bg-black text-lg font-medium hover:bg-gray-50 focus:outline-none"
      >
        <IoLanguage />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-36 rounded-md shadow-lg dark:bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageChange(language)}
                className={`block px-4 py-2 text-sm w-full text-left ${
                  language === currentLocale
                    ? "bg-zinc-700 text-zinc-300"
                    : "text-white hover:bg-zinc-800"
                }`}
                aria-label={`Switch to ${language.toUpperCase()}`}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
