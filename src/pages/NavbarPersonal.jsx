import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

export default function NavbarPersonal() {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileLogo, setShowMobileLogo] = useState(true);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const curr = window.scrollY;
      if (curr === 0 || curr > last) setShowMobileLogo(true);
      else setShowMobileLogo(false);
      last = curr;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Gallery", href: "#gallery" },
    { name: "Creativity", href: "#creativity" },
    { name: "Timeline", href: "#timeline" },
    { name: "Connect", href: "#connect" },
    {name: "twitter", href: "https://twitter.com/abhishekvats29"},
    {name: "Instagram", href: "https://instagram.com/abhishekvats29"},
    {name: "WhatsApp", href: "https://wa.me/919508721988?text=Hi%20Abhishek%2C%20I%20visited%20your%20portfolio!"},
    {name: "Download App", href: "https://drive.google.com/uc?export=download&id=1pnkhvRSO06klV5vFaJYgspghXUBlmDlU"},
  ];

  return (
    <>
      {/* Mobile Logo Bar (full width, tap to open) */}
      {!isOpen && showMobileLogo && (
        <button
          onClick={openMenu}
          className="fixed top-0 left-0 z-50 flex items-center space-x-2 p-3 w-full bg-black/80 backdrop-blur-md border-b border-white/20 md:hidden"
          aria-label="Open Sidebar"
        >
          <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
            <img
              src="/images/vats29.jpeg"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-white font-semibold select-none">Portfolio</span>
        </button>
      )}

      {/* Desktop Logo Bar (full width, click to open) */}
      {!isOpen && (
        <button
          onClick={openMenu}
          className="hidden md:flex fixed top-0 left-0 z-50 items-center space-x-3 px-6 py-3 w-full bg-black/80 backdrop-blur-md border-b border-white/20 hover:bg-black transition"
          aria-label="Open Sidebar"
        >
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
            <img
              src="/images/vats29.jpeg"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-white font-semibold text-lg select-none">Portfolio</span>
        </button>
      )}

      {/* Open Sidebar Icon (both mobile & desktop) */}
      {!isOpen && (
        <button
          onClick={openMenu}
          aria-label="Open Sidebar"
          className="fixed top-1/2 -translate-y-1/2 left-0 z-50 text-white bg-black/70 backdrop-blur-md border border-white/20 rounded-r-xl p-2 hover:scale-110 transition"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-xl border-r border-white/20 shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full text-white">
          {/* Header: Logo + Close */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
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
                className="text-white p-1 rounded hover:bg-white/20 focus:outline-none"
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

          {/* Dark Mode Toggle */}
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
