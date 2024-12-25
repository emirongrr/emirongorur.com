import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4">
      <div className="flex space-x-4">
        <Link
          href="https://github.com/emirongrr"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
        <Link
          href="https://linkedin.com/in/emirongorur"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
        <Link
          href="https://x.com/emirongorur"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
        <Link
          href="https://farcaster.xyz/emirongrr"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
      </div>
    </footer>
  );
};

export default Footer;
