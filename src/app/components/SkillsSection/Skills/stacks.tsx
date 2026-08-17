import {
  BiCodeAlt,
  BiGitBranch,
  BiLockAlt,
  BiNetworkChart,
  BiShieldQuarter,
} from "react-icons/bi";
import {
  SiBitcoin,
  SiDocker,
  SiEthereum,
  SiGraphql,
  SiPython,
  SiReact,
  SiRust,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";
import type { JSX } from "react";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  Rust: <SiRust size={iconSize} className="text-orange-400" />,
  Python: <SiPython size={iconSize} className="text-yellow-300" />,
  Ethereum: <SiEthereum size={iconSize} className="text-gray-500" />,
  Bitcoin: <SiBitcoin size={iconSize} className="text-orange-400" />,
  "Applied Cryptography": (
    <BiLockAlt size={iconSize} className="text-emerald-400" />
  ),
  "Zero-Knowledge Proofs": (
    <BiShieldQuarter size={iconSize} className="text-purple-400" />
  ),
  "Formal Verification": <BiCodeAlt size={iconSize} className="text-sky-400" />,
  "Distributed Systems": (
    <BiNetworkChart size={iconSize} className="text-cyan-300" />
  ),
  Consensus: <BiGitBranch size={iconSize} className="text-indigo-400" />,
  "Blockchain Architecture": (
    <SiEthereum size={iconSize} className="text-zinc-500" />
  ),
  "Privacy-Preserving Systems": (
    <BiShieldQuarter size={iconSize} className="text-green-400" />
  ),
  "Trust-Minimized Systems": (
    <BiLockAlt size={iconSize} className="text-yellow-300" />
  ),
  "P2P Networks": <BiNetworkChart size={iconSize} className="text-blue-400" />,
  "Security Research": (
    <BiShieldQuarter size={iconSize} className="text-red-400" />
  ),
  "Open Source": <BiGitBranch size={iconSize} className="text-zinc-300" />,
  Solidity: <SiSolidity size={iconSize} className="text-gray-400" />,
  EVM: <SiEthereum size={iconSize} className="text-indigo-300" />,
  "Smart Contracts": <SiSolidity size={iconSize} className="text-zinc-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  "React.js": <SiReact size={iconSize} className="text-sky-500" />,
  Docker: <SiDocker size={iconSize} className="text-blue-400" />,
  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
};
