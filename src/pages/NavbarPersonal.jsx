import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Home,
  Image,
  Palette,
  Clock,
  Users,
  HeartHandshake,
  Instagram,
  Twitter,
  Download,
  MessageCircle,
} from "lucide-react";

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

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false); // auto-close on mobile
    }
  };

  const navLinks = [
    { name: "Home", to: "/", icon: <Home size={20} /> },
    { name: "Social Work", href: "#social", icon: <HeartHandshake size={20} /> },
    { name: "Gallery", href: "#gallery", icon: <Image size={20} /> },
    { name: "Creativity", href: "#creativity", icon: <Palette size={20} /> },
    { name: "Timeline", href: "#timeline", icon: <Clock size={20} /> },
    { name: "Connect", href: "#connect", icon: <Users size={20} /> },
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/abhishekvats29", icon: <Twitter size={20} /> },
    { name: "Instagram", href: "https://instagram.com/abhishekvats29", icon: <Instagram size={20} /> },
    {
      name: "WhatsApp",
      href: "https://wa.me/919508721988?text=Hi%20Abhishek%2C%20I%20visited%20your%20portfolio!",
      icon: <MessageCircle size={20} />,
    },
    {
      name: "Download App",
      href: "https://drive.google.com/uc?export=download&id=1pnkhvRSO06klV5vFaJYgspghXUBlmDlU",
      icon: <Download size={20} />,
    },
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
            <img src="/images/vats29.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full" />
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
            <img src="/images/vats29.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="text-white font-semibold text-lg select-none">Portfolio</span>
        </button>
      )}

      {/* Sidebar: mobile fully hidden when closed, desktop mini when closed */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black/80 backdrop-blur-xl border-r border-white/20 shadow-lg transition-all duration-300 z-40
        ${isOpen ? "w-64" : "w-0 md:w-16"}`}
      >
        <div className="flex flex-col h-full text-white">
          {/* Header: Logo + Collapse */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <img src="/images/vats29.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              {isOpen && <span className="text-lg font-extrabold tracking-wide">Portfolio</span>}
            </div>

            {/* ChevronLeft (collapse to mini on desktop, full hide on mobile) */}
            {isOpen && (
              <button
                onClick={closeMenu}
                aria-label="Collapse Sidebar"
                className="text-white p-1 rounded hover:bg-white/20"
              >
                <ChevronLeft size={22} />
              </button>
            )}
          </div>

          {/* When closed: show chevron inside sidebar below logo (desktop only) */}
          {!isOpen && (
            <div className="hidden md:flex justify-center py-3">
              <button
                onClick={openMenu}
                aria-label="Expand Sidebar"
                className="text-white p-1 rounded hover:bg-white/20"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col px-2 py-6 space-y-2">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={handleLinkClick}
                  className="group relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition"
                >
                  {link.icon}
                  {isOpen && <span>{link.name}</span>}
                  {/* Tooltip: desktop-only when collapsed */}
                  {!isOpen && (
                    <span className="hidden md:block absolute left-16 px-3 py-1 text-sm bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {link.name}
                    </span>
                  )}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition"
                >
                  {link.icon}
                  {isOpen && <span>{link.name}</span>}
                  {!isOpen && (
                    <span className="hidden md:block absolute left-16 px-3 py-1 text-sm bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {link.name}
                    </span>
                  )}
                </a>
              )
            )}
          </nav>

          {/* Separator before Social Links */}
          <div className="border-t border-white/20 my-2"></div>

          {/* Social Icons */}
          <div className="flex flex-col space-y-2 px-2 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="group relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition"
              >
                {link.icon}
                {isOpen && <span>{link.name}</span>}
                {!isOpen && (
                  <span className="hidden md:block absolute left-16 px-3 py-1 text-sm bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {link.name}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* ✅ Dark Mode Toggle - hidden when sidebar closed on mobile */}
          {(isOpen || (!isOpen && window.innerWidth >= 768)) && (
            <div className="px-4 py-4 border-t border-white/20 flex items-center gap-2">
              {isOpen && <label className="text-sm">Dark</label>}
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
          )}
        </div>
      </aside>
    </>
  );
}
