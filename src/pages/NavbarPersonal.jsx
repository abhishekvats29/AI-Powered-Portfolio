import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavbarPersonal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Gallery", href: "#gallery" },
    { name: "Creativity", href: "#creativity" },
    { name: "Timeline", href: "#timeline" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo with Text */}
        <Link to="/" className="flex items-center space-x-3">
  <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-white/10 backdrop-blur-md shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.3)] overflow-hidden">
    <img
      src="/images/vats29.jpeg"
      alt="Logo"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
  <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-white">
    Portfolio
  </span>
</Link>



        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-pink-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10 mt-2 rounded-lg shadow-lg text-white text-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block text-base hover:text-pink-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
