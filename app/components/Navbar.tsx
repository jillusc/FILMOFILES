"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-charcoal text-lightgrey py-3 pl-2 pr-7 border-b border-gold">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image
            src="/FFlogo.jpg"
            alt="FILMOFILES"
            width={180}
            height={50}
            priority // "don't lazy load"
          />
        </Link>

        {/* Show burger toggle button on mobile: */}
        <button
          className="burger-btn md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop navlinks: */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link href="/" className="transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/browse" className="transition-colors">
              Browse
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu: */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-end gap-4 py-4 text-lg font-medium">
            <li>
              <Link
                href="/"
                className="transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/browse"
                className="transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
