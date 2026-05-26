export const siteConfig = {
  name: "Emir Öngörür",
  domain: "emirongorur.com",
  url: "https://emirongorur.com",
  blogUrl: "https://blog.emirongorur.com",
  email: "info@emirongorur.com",
  description:
    "Portfolio of Emir Öngörür, a computer engineer, technical writer, and open-source contributor working with Ethereum, distributed systems, Rust, Next.js, and TypeScript.",
  keywords: [
    "Emir Öngörür",
    "Emir Ongorur",
    "computer engineer",
    "software developer",
    "technical writer",
    "open-source contributor",
    "Ethereum",
    "blockchain",
    "Rust",
    "Next.js",
    "TypeScript",
    "Python",
    "distributed systems",
    "zero-knowledge proofs",
  ],
  social: {
    github: "https://github.com/emirongrr",
    linkedin: "https://linkedin.com/in/emirongorur",
    x: "https://x.com/emirongorur",
    farcaster: "https://farcaster.xyz/emirongrr",
  },
} as const;

export type Locale = "en" | "tr";

export const routeLabels = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    blog: "Blog",
  },
  tr: {
    home: "Anasayfa",
    about: "Hakkımda",
    projects: "Projeler",
    blog: "Blog",
  },
} satisfies Record<Locale, Record<string, string>>;

export const routeMetadata = {
  en: {
    home: {
      title: "Emir Öngörür | Computer Engineer and Open-Source Contributor",
      description: siteConfig.description,
      path: "/en",
    },
    about: {
      title: "About Emir Öngörür",
      description:
        "Learn about Emir Öngörür's engineering background, blockchain work, technical writing, and open-source experience.",
      path: "/en/about",
    },
    projects: {
      title: "Projects by Emir Öngörür",
      description:
        "Explore Emir Öngörür's software, blockchain, Ethereum, Rust, and open-source projects.",
      path: "/en/projects",
    },
  },
  tr: {
    home: {
      title: "Emir Öngörür | Bilgisayar Mühendisi ve Açık Kaynak Katkıcısı",
      description:
        "Emir Öngörür'ün Ethereum, dağıtık sistemler, Rust, Next.js ve TypeScript odağındaki portfolyosu.",
      path: "/tr",
    },
    about: {
      title: "Emir Öngörür Hakkında",
      description:
        "Emir Öngörür'ün mühendislik geçmişi, blockchain çalışmaları, teknik yazıları ve açık kaynak deneyimi.",
      path: "/tr/about",
    },
    projects: {
      title: "Emir Öngörür Projeleri",
      description:
        "Emir Öngörür'ün yazılım, blockchain, Ethereum, Rust ve açık kaynak projelerini keşfedin.",
      path: "/tr/projects",
    },
  },
} satisfies Record<
  Locale,
  Record<"home" | "about" | "projects", { title: string; description: string; path: string }>
>;
