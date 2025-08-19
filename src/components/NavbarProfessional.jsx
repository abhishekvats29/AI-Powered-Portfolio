import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Home,
  User,
  Clock,
  Award,
  Folder,
  Code2,
  Mail,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

export default function NavbarProfessional() {
  const [isOpen, setIsOpen] = useState(true);
  const [showMobileNavbar, setShowMobileNavbar] = useState(true);
  const [isToggleWhite, setIsToggleWhite] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const onScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY <= 50 || currentScrollY < lastScrollY) {
        setShowMobileNavbar(true);
      } else {
        setShowMobileNavbar(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Timeline", href: "#Timeline", icon: <Clock size={20} /> },
    { name: "Certifications", href: "#Certifications", icon: <Award size={20} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={20} /> },
    { name: "Skills", href: "#skills", icon: <Code2 size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/abhishekvats29",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abhishekvats29",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Download App",
      href: "https://drive.google.com/uc?export=download&id=1pnkhvRSO06klV5vFaJYgspghXUBlmDlU",
      icon: <Download size={20} />,
    },
  ];

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      closeMenu(); // Only close sidebar on mobile
    }
  };

  const isMobile = window.innerWidth < 768;

  return (
    <>
      {/* Mobile Top Bar (only visible when sidebar closed) */}
      {!isOpen && showMobileNavbar && isMobile && (
        <div className="flex justify-between items-center px-4 py-6 border-b border-blue-700">
  <div className="flex items-center gap-3">
    <img
      src="/images/profile.jpeg"
      alt="Profile"
      className="w-10 h-10 rounded-full border-2 border-white object-cover"
    />
    {/* Always show Portfolio text on desktop, even when collapsed */}
    {(!isMobile || isOpen) && (
      <span className="text-xl font-extrabold tracking-wide text-white">
        Portfolio
      </span>
    )}
  </div>
  {/* Collapse button */}
  {isOpen && (
    <button
      onClick={closeMenu}
      aria-label="Collapse Sidebar"
      className="text-white p-1 rounded hover:bg-blue-700/50"
    >
      <ChevronLeft size={28} />
    </button>
  )}
</div>
      )}

      {/* Open Button (Mobile & Desktop Mini) */}
      {!isOpen && (
        <button
          onClick={openMenu}
          className={`fixed z-50 text-white bg-blue/70 backdrop-blur-md border border-white/20 rounded-r-xl p-2 hover:scale-110 transition ${
            isMobile
              ? "top-1/2 -translate-y-1/2 left-0" // Floating mid-left for mobile
              : "top-4 left-16" // Near mini sidebar for desktop
          }`}
          aria-label="Open Sidebar"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full ${
          isOpen ? "w-64" : isMobile ? "w-0" : "w-16"
        } bg-[#0d1a2d] dark:bg-[#0a1524] backdrop-blur-lg border-r border-blue-800 shadow-lg transform transition-all duration-300 z-50 overflow-hidden`}
      >
        <div className="flex flex-col h-full text-white">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-6 border-b border-blue-700">
            <div className="flex items-center gap-3 group relative">
              <img
                src="/images/profile.jpeg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              {isOpen && (
                <span className="text-xl font-extrabold tracking-wide text-white">
                  Portfolio
                </span>
              )}

              {/* ✅ Tooltip for collapsed desktop */}
              {!isOpen && !isMobile && (
                <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
                  Portfolio
                </span>
              )}
            </div>

            {/* Collapse button */}
            {isOpen && (
              <button
                onClick={closeMenu}
                aria-label="Collapse Sidebar"
                className="text-white p-1 rounded hover:bg-blue-700/50"
              >
                <ChevronLeft size={28} />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-2 text-lg font-semibold">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleNavClick}
                  className="group relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700/50 transition"
                >
                  {link.icon}
                  {isOpen && <span>{link.name}</span>}
                  {/* ✅ Tooltip */}
                  {!isOpen && !isMobile && (
                    <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
                      {link.name}
                    </span>
                  )}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="group relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700/50 transition"
                >
                  {link.icon}
                  {isOpen && <span>{link.name}</span>}
                  {/* ✅ Tooltip */}
                  {!isOpen && !isMobile && (
                    <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
                      {link.name}
                    </span>
                  )}
                </a>
              )
            )}
          </nav>

          {/* Social Links Section */}
          <div className="px-2 py-4 border-t border-blue-700">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700/50 transition"
              >
                {link.icon}
                {isOpen && <span>{link.name}</span>}
                {/* ✅ Tooltip */}
                {!isOpen && !isMobile && (
                  <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
                    {link.name}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div
            className="px-4 py-4 border-t border-blue-700 flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setIsToggleWhite((prev) => !prev)}
          >
            <label
              className="text-sm"
              style={{ color: isToggleWhite ? "white" : "#93c5fd" }}
            >
              Dark
            </label>
            <div
              className="w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300"
              style={{
                backgroundColor: isToggleWhite ? "white" : "#3b82f6",
              }}
            >
              <div
                className="w-4 h-4 rounded-full shadow-md transform transition-transform duration-300"
                style={{
                  backgroundColor: isToggleWhite ? "#3b82f6" : "white",
                  transform: isToggleWhite
                    ? "translateX(0)"
                    : "translateX(1.5rem)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}
