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
  Info,
  HeartHandshake,
  Instagram,
  Twitter,
  Download,
  MessageCircle,
} from "lucide-react";

export default function NavbarPersonal() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false); // auto-close on mobile
    }
  };

  const navLinks = [
    { name: "Home", to: "/", icon: <Home size={20} /> },
    { name: "About", href: "#About", icon: <Info size={20} /> },
    { name: "Gallery", href: "#gallery", icon: <Image size={20} /> },
    { name: "Social Work", href: "#social", icon: <HeartHandshake size={20} /> },
    { name: "Creativity", href: "#creativity", icon: <Palette size={20} /> },
    { name: "Timeline", href: "#timeline", icon: <Clock size={20} /> },
    { name: "Connect", href: "#connect", icon: <Users size={20} /> },
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/abhishekvats29", icon: <Twitter size={20} /> },
    
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
      {/* Mobile Top Bar (Profile + Portfolio + Hamburger) */}
      {!isOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-light-black/90 backdrop-blur-md border-b border-white/20 md:hidden">
          {/* Profile + Portfolio (clickable) */}
          <div className="flex items-center cursor-pointer" onClick={openMenu}>
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
              <img src="/images/vats29.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="ml-2 text-white font-semibold">Portfolio</span>
          </div>

          {/* Hamburger menu */}
          <button
            onClick={openMenu}
            className="flex flex-col space-y-1.5 cursor-pointer"
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      )}

      {/* Desktop Top Bar (unchanged) */}
      {/* Desktop Top Bar (glassmorphic 3D with glowing red bottom line) */}
      {!isOpen && (
        <button
          onClick={openMenu}
          className="hidden md:flex fixed top-0 left-0 z-50 items-center space-x-3 px-6 py-3 w-full 
                    bg-black/40 backdrop-blur-lg relative transition-all duration-300 hover:backdrop-brightness-105"
          aria-label="Open Sidebar"
        >
          {/* Bottom red line */}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600/60 rounded-sm 
                          transition-all duration-300 hover:shadow-[0_0_8px_rgba(229,9,20,0.8)]"></span>

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




      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black/80 backdrop-blur-xl border-r border-[#e50914]/80 → border-r border-[#e50914]
         shadow-lg transition-all duration-300 z-40
        ${isOpen ? "w-64" : "w-0 md:w-16"}`}
      >
        <div className="flex flex-col h-full text-red">
          {/* Header: Logo + Collapse */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#e50914]/80 → border-b border-[#e50914]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-red overflow-hidden">
                <img src="/images/vats29.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              {isOpen && <span className="text-lg font-extrabold tracking-wide text-[#e50914]">Portfolio</span>}

            </div>

            {isOpen && (
              <button
                onClick={closeMenu}
                aria-label="Collapse Sidebar"
                className="text-white p-1 rounded hover:bg-[#e50914]/100"

              >
                <ChevronLeft size={22} />
              </button>
            )}
          </div>

          {/* Expand button (desktop only) */}
          {!isOpen && (
            <div className="hidden md:flex justify-center py-3">
              <button
                onClick={openMenu}
                aria-label="Expand Sidebar"
                className="group flex items-center gap-3 px-4 py-2 rounded-lg text-white 
                  transition-all duration-300 ease-in-out 
                  hover:text-white hover:bg-red-600/20 hover:border hover:border-red-500/40 
                  hover:backdrop-blur-md"



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
                  className="group flex items-center gap-3 px-4 py-2 rounded-lg text-white 
                    transition-all duration-300 ease-in-out 
                    hover:text-white hover:bg-red-600/20 hover:border hover:border-red-500/40 
                    hover:backdrop-blur-md"


                >
                  {link.icon}
                  {isOpen && <span>{link.name}</span>}
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
                  className="group flex items-center gap-3 px-4 py-2 rounded-lg text-white 
                    transition-all duration-300 ease-in-out 
                    hover:text-white hover:bg-red-600/20 hover:border hover:border-red-500/40 
                    hover:backdrop-blur-md"


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

          <div className="border-t border-[#e50914]/100 → border-t border-[#e50914]"></div>

          {/* Social Icons */}
          <div className="flex flex-col space-y-2 px-2 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="group flex items-center gap-3 px-4 py-2 rounded-lg text-white 
                  transition-all duration-300 ease-in-out 
                  hover:text-white hover:bg-red-600/20 hover:border hover:border-red-500/40 
                  hover:backdrop-blur-md"


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

          {/* Dark Mode Toggle */}
          {(isOpen || (!isOpen && window.innerWidth >= 768)) && (
            <div className="px-4 py-4 border-t border-[#e50914]/40 flex items-center gap-2">
              {isOpen && <label className="text-sm">Dark</label>}
              <button
                onClick={toggleDarkMode}
                className={`w-10 h-5 rounded-full flex items-center px-1 transition ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-[#e50914] shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-5" : "translate-x-0"
                  }`}

                ></div>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/*  Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}
