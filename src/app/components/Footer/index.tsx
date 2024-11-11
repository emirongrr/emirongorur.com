// src/app/components/Footer/index.tsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4">
      <div className="flex space-x-4">
        <Link
          href="https://github.com/emirongrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src="/github.svg" alt="GitHub" className="h-8 w-8 hover:opacity-80 transition-opacity" /> */}
        </Link>
        <Link
          href="https://linkedin.com/in/emirongrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src="/linkedin.svg" alt="LinkedIn" className="h-8 w-8 hover:opacity-80 transition-opacity" /> */}
        </Link>
        <Link
          href="https://x.com/emirongrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src="/twitter.svg" alt="Twitter" className="h-8 w-8 hover:opacity-80 transition-opacity" /> */}
        </Link>
        <Link
          href="https://farcaster.xyz/emirongrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src="/farcaster.svg" alt="Farcaster" className="h-8 w-8 hover:opacity-80 transition-opacity" /> */}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
