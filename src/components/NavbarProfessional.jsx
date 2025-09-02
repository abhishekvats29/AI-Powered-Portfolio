import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaClock,
  FaAward,
  FaFolder,
  FaWrench,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function NavbarProfessional() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(true);
  const [isToggleWhite, setIsToggleWhite] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  // Track screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show navbar only when scrolling down
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const onScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY) {
        setShowMobileNavbar(true);
      } else {
        setShowMobileNavbar(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Brand colors
  const brandColors = {
    home: "#ff5733",
    about: "#2980b9",
    timeline: "#8e44ad",
    certifications: "#f1c40f",
    projects: "#27ae60",
    skills: "#e67e22",
    contact: "#c0392b",
    github: "#171515",
    linkedin: "#0077b5",
    download: "#27ae60",
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome size={20} color={brandColors.home} /> },
    { name: "About", href: "#about", icon: <FaUser size={20} color={brandColors.about} /> },
    { name: "Timeline", href: "#Timeline", icon: <FaClock size={20} color={brandColors.timeline} /> },
    { name: "Certifications", href: "#Certifications", icon: <FaAward size={20} color={brandColors.certifications} /> },
    { name: "Projects", href: "#projects", icon: <FaFolder size={20} color={brandColors.projects} /> },
    { name: "Skills", href: "#skills", icon: <FaWrench size={20} color={brandColors.skills} /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope size={20} color={brandColors.contact} /> },
  ];

  const socialLinks = [
  { name: "GitHub", href: "https://github.com/abhishekvats29", icon: <FaGithub size={20} color="white" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhishekvats29", icon: <FaLinkedin size={20} color="#0077b5" /> },
  { name: "Download App", href: "https://drive.google.com/uc?export=download&id=1pnkhvRSO06klV5vFaJYgspghXUBlmDlU", icon: <FaDownload size={20} color="#27ae60" /> },
];


  const handleNavClick = () => {
    if (isMobile) closeMenu();
  };

  return (
    <>
      {/* Collapsed Sidebar (desktop only) */}
      {!isMobile && !isOpen && (
        <div className="fixed top-0 left-0 h-screen w-16 bg-black/70 backdrop-blur-md z-50 flex flex-col items-center py-4">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white object-cover mb-6"
          />

          <nav className="flex flex-col gap-6 mt-2 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-white cursor-pointer hover:scale-110 transition"
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Sidebar Toggle Button (Desktop, when sidebar is collapsed) */}
      {!isMobile && !isOpen && (
        <button
          onClick={openMenu}
          className="fixed top-16 left-16 z-[60] 
               flex items-center justify-center 
               w-11 h-11 
               bg-white/10 backdrop-blur-xl 
               border border-white/20 
               rounded-xl shadow-lg 
               hover:bg-white/20 hover:scale-105 
               transition-all duration-300 ease-out"
          aria-label="Open Sidebar"
        >
          <ChevronRight size={22} className="text-white drop-shadow" />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#0d1a2d] dark:bg-[#0a1524] backdrop-blur-lg border-r border-blue-800 shadow-lg transform transition-all duration-300 z-50 
          ${
            isMobile
              ? isOpen
                ? "translate-x-0 w-4/5 max-w-sm"
                : "-translate-x-full w-4/5 max-w-sm"
              : isOpen
              ? "w-64"
              : "w-16"
          }`}
      >
        <div className="flex flex-col h-full text-white">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-6 border-b border-blue-700">
            <div className="flex items-center gap-3 cursor-pointer" onClick={openMenu}>
              <img
                src="/images/profile.jpeg"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              {isOpen && (
                <span className="text-xl font-extrabold tracking-wide text-white">
                  Portfolio
                </span>
              )}
            </div>
            {isOpen && (
              <button
                onClick={closeMenu}
                aria-label="Close Sidebar"
                className="text-white p-1 rounded hover:bg-blue-700/50"
              >
                <ChevronLeft size={28} />
              </button>
            )}
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-3 py-4 space-y-2 text-md font-semibold">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleNavClick}
                  className="group relative flex items-center gap-3 p-2 rounded-md hover:bg-blue-700/40 transition"
                >
                  {link.icon}
                  {isOpen ? (
                    <span>{link.name}</span>
                  ) : (
                    !isMobile && (
                      <span className="absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        {link.name}
                      </span>
                    )
                  )}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="group relative flex items-center gap-3 p-2 rounded-md hover:bg-blue-700/40 transition"
                >
                  {link.icon}
                  {isOpen ? (
                    <span>{link.name}</span>
                  ) : (
                    !isMobile && (
                      <span className="absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        {link.name}
                      </span>
                    )
                  )}
                </a>
              )
            )}
          </nav>

          <hr className="border-blue-700 my-2 mx-3" />

          {/* Social Links */}
          <div className="px-3 py-2 space-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-2 rounded-md hover:bg-blue-700/40 transition"
              >
                {link.icon}
                {isOpen ? (
                  <span>{link.name}</span>
                ) : (
                  !isMobile && (
                    <span className="absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {link.name}
                    </span>
                  )
                )}
              </a>
            ))}
          </div>

          {/* Dark mode toggle */}
          <div
            className="px-3 py-4 border-t border-blue-700 flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setIsToggleWhite((prev) => !prev)}
          >
            {isOpen && (
              <label
                className="text-sm"
                style={{ color: isToggleWhite ? "white" : "#93c5fd" }}
              >
                Dark
              </label>
            )}
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

      {/* Mobile Top Mini Header */}
      {isMobile && !isOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1a2d] border-b border-blue-800 flex items-center justify-between px-4 py-3">
          <div className="flex items-center cursor-pointer" onClick={openMenu}>
            <img
              src="/images/profile.jpeg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white object-cover mr-3"
            />
            <span className="text-lg font-bold text-white">Portfolio</span>
          </div>

          <button
            className="flex flex-col space-y-1.5 cursor-pointer"
            onClick={openMenu}
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu}></div>
      )}
    </>
  );
}
