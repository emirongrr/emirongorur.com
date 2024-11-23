"use client";
import { useTheme } from "next-themes";
import SunIcon from "../../assets/icons/sun";
import MoonIcon from "../../assets/icons/moon";

export default function Theme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  function toggleTheme() {
    return currentTheme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <button
      onClick={toggleTheme}
      className={` dark:text-primary-color text-zinc-500 border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-300 transition-transform group: ${
        currentTheme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Theme"
    >
      {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
