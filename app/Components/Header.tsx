import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <nav className="container mx-auto py-4 px-6 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide text-cyan-400 cursor-pointer">
          Afaq Portfolio
        </div>
        <div className="space-x-6 md:space-x-8 text-lg font-medium flex">
          <Link
            href="#home"
            scroll={true}
            className="hover:text-cyan-400 transition-colors duration-200 relative"
          >
            Home
            <span className="absolute bottom-0 left-0 h-1 w-full bg-cyan-400 scale-x-0 transition-transform duration-200 origin-left hover:scale-x-100" />
          </Link>
          <Link
            href="#about"
            scroll={true}
            className="hover:text-cyan-400 transition-colors duration-200 relative"
          >
            About
            <span className="absolute bottom-0 left-0 h-1 w-full bg-cyan-400 scale-x-0 transition-transform duration-200 origin-left hover:scale-x-100" />
          </Link>
          <Link
            href="#contact"
            scroll={true}
            className="hover:text-cyan-400 transition-colors duration-200 relative"
          >
            Contact
            <span className="absolute bottom-0 left-0 h-1 w-full bg-cyan-400 scale-x-0 transition-transform duration-200 origin-left hover:scale-x-100" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
