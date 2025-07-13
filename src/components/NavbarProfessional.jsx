import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavbarProfessional() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Timeline", href: "#Timeline" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
          <span className="text-white font-bold text-xl tracking-wide">Portfolio</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-white">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-blue-300 transition"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-300 transition"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1a2d]/90 border-t border-white/10 mt-2 rounded-lg shadow-md text-white text-center py-4 space-y-4">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="block text-base hover:text-blue-300 transition"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block text-base hover:text-blue-300 transition"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}
