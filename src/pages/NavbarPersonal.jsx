import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavbarPersonal() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileLogo, setShowMobileLogo] = useState(true);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

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

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0 || currentScrollY > lastScrollY) {
        setShowMobileLogo(true);
      } else {
        setShowMobileLogo(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Gallery", href: "#gallery" },
    { name: "Creativity", href: "#creativity" },
    { name: "Timeline", href: "#timeline" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <>
      {/* Mobile Logo Button (full width) */}
      {!isOpen && showMobileLogo && (
        <button
          onClick={openMenu}
          className="fixed top-0 left-0 z-50 flex items-center space-x-2 p-3 bg-black/60 w-full rounded-b-lg backdrop-blur-md border-b border-white/20 md:hidden"
          aria-label="Open Sidebar"
        >
          <div className="w-10 h-10 rounded-full border-2 border-white bg-white/10 overflow-hidden flex-shrink-0">
            <img
              src="/images/vats29.jpeg"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-white font-semibold select-none">Portfolio</span>
        </button>
      )}

      {/* Desktop Logo Button (full width) */}
      {!isOpen && (
        <button
          onClick={openMenu}
          className="hidden md:flex fixed top-0 left-0 z-50 items-center space-x-3 px-6 py-3 bg-black/60 w-full rounded-b-lg backdrop-blur-md border-b border-white/20 cursor-pointer hover:bg-black/80 transition"
          aria-label="Open Sidebar"
        >
          <div className="w-12 h-12 rounded-full border-2 border-white bg-white/10 overflow-hidden flex-shrink-0">
            <img
              src="/images/vats29.jpeg"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-white font-semibold select-none text-lg">Portfolio</span>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black/50 dark:bg-black/70 backdrop-blur-lg border-r border-white/20 shadow-lg transform transition-transform duration-300 z-40
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
        style={{ paddingTop: "20px" }} // Reduced spacing above logo
      >
        <div className="flex flex-col h-full text-white">
          {/* Header: Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/20 relative">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-white/10 overflow-hidden">
                <img
                  src="/images/vats29.jpeg"
                  alt="Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-extrabold tracking-wide">Portfolio</span>
            </div>

            {isOpen && (
              <button
                onClick={closeMenu}
                aria-label="Close Sidebar"
                className="text-white md:block p-1 rounded hover:bg-white/20 focus:outline-none"
              >
                <X size={24} />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-6 space-y-6 text-lg font-semibold">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={closeMenu}
                  className="block hover:text-pink-300 transition"
                  style={{ lineHeight: "2rem" }}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block hover:text-pink-300 transition"
                  style={{ lineHeight: "2rem" }}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Dark Mode Toggle (optional) */}
          <div className="px-6 py-4 border-t border-white/20 flex items-center gap-2">
            <label className="text-sm">Dark</label>
            <button
              onClick={toggleDarkMode}
              className={`w-10 h-5 rounded-full flex items-center px-1 transition ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-pink-400 shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
