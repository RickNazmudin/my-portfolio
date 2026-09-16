"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    document.body.style.overflow = "unset";
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    closeMenu();
    if (href && href.startsWith("/#")) {
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href && href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { label: "<About/>", href: "/#about" },
    { label: "<Experience/>", href: "/#experience" },
    { label: "<Skills/>", href: "/#skills" },
    { label: "<Projects/>", href: "/#projects" },
    { label: "<Education/>", href: "/#education" },
    { label: "<Contact/>", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1224]/90 backdrop-blur-md border-b border-[#25213b] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-[#1b223c]/50"
      }`}
    >
      <div className="mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-lg sm:text-xl md:text-2xl font-bold tracking-wider"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[#E06C75]">const</span>{" "}
          <span className="text-[#98C379]">dev</span>{" "}
          <span className="text-[#E5C07B]">=</span>{" "}
          <span className="text-[#61AFEF] group-hover:text-[#f9d049] transition-colors duration-300">
            &quot;RICKO&quot;
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={handleLinkClick}
              className="px-3 py-1.5 rounded-lg font-mono text-sm lg:text-base text-gray-300 hover:text-[#f9d049] hover:bg-[#1b223c]/60 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#1b223c] focus:outline-none transition-all duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#0d1224] border-l border-[#25213b] p-6 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#25213b]">
            <span className="font-mono text-sm text-[#98C379]">{"// Navigation"}</span>
            <button
              onClick={closeMenu}
              className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1b223c]"
            >
              <HiX size={22} />
            </button>
          </div>

          <ul className="flex flex-col gap-2 mt-6">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 rounded-lg font-mono text-base text-gray-200 hover:text-[#f9d049] hover:bg-[#1b223c]/80 transition-all duration-200 border-l-2 border-transparent hover:border-[#f9d049]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-[#25213b] text-center">
          <p className="text-xs text-gray-400 font-mono">
            © 2026 Ricko Najmudin
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
