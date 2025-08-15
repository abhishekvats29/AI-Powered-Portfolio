import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

export default function NavbarProfessional() {
  const [isOpen, setIsOpen] = useState(true);
  const [showMobileNavbar, setShowMobileNavbar] = useState(true);
  const [isToggleWhite, setIsToggleWhite] = useState(false); // Cosmetic dark toggle

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
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#Timeline" },
    { name: "Certifications", href: "#Certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      closeMenu(); // Only close sidebar on mobile
    }
  };

  return (
    <>
      {/* Profile Logo Bar (Visible when sidebar closed) */}
      {!isOpen && showMobileNavbar && (
        <div
          className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/30 shadow-lg cursor-pointer flex items-center px-4 py-3"
          onClick={openMenu}
        >
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
          <span className="text-white font-semibold ml-4 select-none text-lg">
            Portfolio
          </span>
        </div>
      )}

      {/* Open Sidebar Icon (Visible on both desktop & mobile when closed) */}
      {!isOpen && (
        <button
          onClick={openMenu}
          className="fixed top-1/2 -translate-y-1/2 left-0 z-50 text-white bg-blue/70 backdrop-blur-md border border-white/20 rounded-r-xl p-2 hover:scale-110 transition"
          aria-label="Open Sidebar"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0d1a2d] dark:bg-[#0a1524] backdrop-blur-lg border-r border-blue-800 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full text-white">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-blue-700">
            <div className="flex items-center gap-3">
              <img
                src="/images/profile.jpeg"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <span className="text-xl font-extrabold tracking-wide text-white">
                Portfolio
              </span>
            </div>
            {isOpen && (
              <button
                onClick={closeMenu}
                aria-label="Close Sidebar"
                className="text-white p-1 rounded hover:bg-blue-700/50"
              >
                <X size={28} />
              </button>
            )}
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-6 py-6 space-y-6 text-lg font-semibold">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleNavClick}
                  className="block hover:text-blue-400 transition"
                  style={{ lineHeight: "2rem" }}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block hover:text-blue-400 transition"
                  style={{ lineHeight: "2rem" }}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Cosmetic Dark Mode Toggle */}
          <div
            className="px-6 py-4 border-t border-blue-700 flex items-center gap-2 cursor-pointer select-none"
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

      {/* Mobile/Desktop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}
