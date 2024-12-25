'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/Assets/heading.png"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-sm backdrop-blur-md  z-[1000]">


      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo} // Place your logo in /public/logo.png
            alt="Company Logo"
            width={120}
            height={40}
            className="bg-white p-4 rounded-lg shadow-md"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="#ingredients" className="hover:text-[#57a5bc] transition-colors">
              Ingredients
            </Link>
          </li>
          <li>
            <Link href="#Blog" className="hover:text-[#57a5bc] transition-colors">
              News
            </Link>
          </li>
          <li>
          <Link
             href="#contact"
             className="bg-[#17414F] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#145065] hover:scale-1120 shadow-md"
            >
              Contact Me
          </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="md:hidden backdrop-blur-md   bg-black/5 py-4 text-center space-y-4 text-black font-medium ">
          <li>
            <Link href="#ingredients" className="block hover:text-[#17414F]">
              Ingredients
            </Link>
          </li>
          <li>
            <Link href="#news" className="block hover:text-[#17414F]">
              News
            </Link>
          </li>
          <li>
            <Link href="#contact" className="block hover:text-[#17414F]">
              Contact Me
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
