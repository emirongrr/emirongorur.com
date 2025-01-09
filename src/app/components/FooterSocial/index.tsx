import React from "react";
import { FaGithub} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";

const FooterSocials: React.FC = () => {
  return (
    <div className="fo w-full mt-auto flex justify-center">
      <div className="fo-items flex flex-wrap justify-center items-center gap-4 p-4 rounded-lg">
        {/* GitHub */}
        <a
          id="s_github"
          target="_blank"
          href="https://github.com/emirongrr"
          title="GitHub"
          className="mx-4 my-2 text-gray-200 transition-transform transform hover:scale-125 hover:text-gray-600"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl" />
          <span className="sr-only">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          id="s_linkedin"
          target="_blank"
          href="https://linkedin.com/in/emirongrr"
          title="LinkedIn"
          className="mx-4 my-2 text-gray-200  transition-transform transform hover:scale-125 hover:text-blue-700"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl" />
          <span className="sr-only">LinkedIn</span>
        </a>

        {/* X (formerly Twitter) */}
        <a
          id="s_x"
          target="_blank"
          href="https://x.com/emirongrr"
          title="X (Twitter)"
          className="mx-4 my-2 text-gray-200  transition-transform transform hover:scale-125 hover:text-gray-500"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="text-2xl" />
          <span className="sr-only">X (Twitter)</span>
        </a>

        {/* Farcaster */}
        <a
          id="s_farcaster"
          target="_blank"
          href="https://warpcast.com/emirongrr"
          title="Farcaster"
          className="mx-4 my-2 text-gray-200 transition-transform transform hover:scale-125 hover:text-purple-600"
          rel="noopener noreferrer"
        >
          <SiFarcaster className="text-2xl" />
          <span className="sr-only">Farcaster</span>
        </a>
      </div>
    </div>
  );
};

export default FooterSocials;
