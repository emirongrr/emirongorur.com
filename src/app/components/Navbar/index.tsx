// src/app/components/Navbar/index.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" w-full h-[80px] bg-transparent flex justify-between items-center px-6 shadow-md z-50">
      <ul className="hidden md:flex space-x-4 justify-center flex-grow">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
