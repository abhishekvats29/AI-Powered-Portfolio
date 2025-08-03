import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavbarProfessional() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#Timeline" },
    { name: "Certifications", href: "#Certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 dark:bg-black/20 backdrop-blur-md border-b border-white/10 shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
          <span className="text-white font-bold text-xl tracking-wide">Portfolio</span>
        </Link>

        <div className="hidden md:flex space-x-8 text-sm font-semibold text-white">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.name} to={link.href} className="hover:text-blue-300 transition">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className="hover:text-blue-300 transition">
                {link.name}
              </a>
            )
          )}
        </div>

        <button onClick={toggleMenu} className="md:hidden text-white z-[60]">
          <Menu size={24} />
        </button>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu}></div>}

      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-[#0d1a2d] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/20">
          <div className="flex items-center gap-3">
            <img
              src="/images/profile.jpeg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <span className="text-white font-bold text-xl tracking-wide">Portfolio</span>
          </div>
          <button onClick={closeMenu} className="text-white">
            <X size={24} />
          </button>
        </div>

        {/* Dark Mode Toggle at Top */}
        <div className="flex items-center gap-3 mt-6 px-6">
          <label className="text-white text-base font-medium">Dark Mode</label>
          <button
            onClick={toggleDarkMode}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-blue-500 shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <div className="flex flex-col gap-6 px-6 py-6 text-white text-lg font-semibold">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="hover:text-blue-200 transition"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="hover:text-blue-200 transition"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
