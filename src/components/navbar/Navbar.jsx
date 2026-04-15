'use client';
import { ChartLine, Clock3, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between p-5">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl">
          Keen<span className="text-green-900">Keeper</span>
        </h1>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-4">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-green-900 transition-colors"
          >
            <RiHome2Line />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/timeline"
            className="flex items-center gap-1 hover:text-green-900 transition-colors"
          >
            <Clock3 size={16} />
            Timeline
          </Link>
        </li>
        <li>
          <Link
            href="/stats"
            className="flex items-center gap-1 hover:text-green-900 transition-colors"
          >
            <ChartLine size={16} />
            Stats
          </Link>
        </li>
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex items-center justify-center p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-0 md:hidden z-50">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 px-5 py-3 hover:bg-green-50 hover:text-green-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <RiHome2Line />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className="flex items-center gap-2 px-5 py-3 hover:bg-green-50 hover:text-green-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Clock3 size={16} />
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/stats"
              className="flex items-center gap-2 px-5 py-3 hover:bg-green-50 hover:text-green-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <ChartLine size={16} />
              Stats
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
