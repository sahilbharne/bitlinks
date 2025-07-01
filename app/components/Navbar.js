"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // You need to install lucide-react for icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 px-4 md:px-8 text-white shadow-md">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold flex items-center gap-1">
          <Link href="/" className="flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Bit</span>
            <span className="drop-shadow">Links</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-5 items-center font-medium">
          <li><Link href="/" className="hover:text-gray-200 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-200 transition">About</Link></li>
          <li><Link href="/shorten" className="hover:text-gray-200 transition">Shorten</Link></li>
          <li><Link href="/contact" className="hover:text-gray-200 transition">Contact Us</Link></li>
          <li className="flex gap-2">
            <Link href="/shorten">
              <button className="bg-purple-500 hover:bg-purple-600 active:scale-95 rounded-lg px-3 py-1 font-semibold shadow-md transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 hover:bg-purple-600 active:scale-95 rounded-lg px-3 py-1 font-semibold shadow-md transition">
                GitHub
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-2 pb-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-200 transition">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-200 transition">About</Link>
          <Link href="/shorten" onClick={() => setMenuOpen(false)} className="hover:text-gray-200 transition">Shorten</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-200 transition">Contact Us</Link>
          <div className="flex gap-2">
            <Link href="/shorten">
              <button className="bg-purple-500 hover:bg-purple-600 active:scale-95 rounded-md px-3 py-1 font-semibold shadow-md transition">
                Try
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 hover:bg-purple-600 active:scale-95 rounded-md px-3 py-1 font-semibold shadow-md transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
