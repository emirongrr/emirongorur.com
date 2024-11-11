import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiRust,
  SiEthereum,
  SiDocker,
  SiPython,
} from "react-icons/si";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  Docker: <SiDocker size={iconSize} className="text-blue-400" />,
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  Rust: <SiRust size={iconSize} className="text-orange-400" />,
  Python: <SiPython size={iconSize} className="text-[#ffde57]" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
  ),
  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  "Material UI": <SiMui size={iconSize} className="text-sky-400" />,
  Prisma: <SiPrisma size={iconSize} className="text-emerald-500" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  "Blockchain Developer": (
    <SiEthereum size={iconSize} className="text-gray-700" />
  ),
  "Nuxt.js": <SiNuxtdotjs size={iconSize} className="text-green-400" />,
  "Node.js": <SiNodedotjs size={iconSize} className="text-green-600" />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  Webpack: <SiWebpack size={iconSize} className="text-blue-500" />,
  "Styled Components": (
    <SiStyledcomponents size={iconSize} className="text-pink-500" />
  ),
  CSS: <SiCss3 size={iconSize} className="text-blue-300" />,
  Socket: <SiSocketdotio size={iconSize} />,
  Express: <SiExpress size={iconSize} />,
};
