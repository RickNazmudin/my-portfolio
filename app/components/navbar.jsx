"use client";
// @flow strict
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk mengatur overflow body
  const toggleBodyScroll = (disable) => {
    document.body.style.overflow = disable ? "hidden" : "unset";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleBodyScroll(!isMenuOpen);
  };

  // Handle menu item click
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    toggleBodyScroll(false);
  };

  // Cleanup pada unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle resize window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
        toggleBodyScroll(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#1E1E1E] border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="font-mono text-[#61DAFB] text-xl md:text-2xl font-bold"
            >
              <span className="text-[#E06C75]">const</span>{" "}
              <span className="text-[#98C379]">dev</span>{" "}
              <span className="text-[#E5C07B]">=</span>{" "}
              <span className="text-[#61AFEF]">"RICKO"</span>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#ABB2BF] hover:text-[#98C379] focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Overlay Background */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={handleMenuItemClick}
              aria-hidden="true"
            />
          )}

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen
                ? "fixed inset-y-0 right-0 w-64 bg-[#1E1E1E] shadow-lg transform translate-x-0"
                : "hidden transform translate-x-full"
            } transition-transform duration-300 ease-in-out md:relative md:block md:bg-transparent md:w-auto md:transform-none md:translate-x-0 top-0 z-40`}
          >
            <ul className="md:flex md:space-x-1 pt-16 md:pt-0">
              <li className="border-b border-[#333333] md:border-none">
                <Link
                  className="block px-4 py-3 md:py-2 no-underline outline-none hover:no-underline group"
                  href="/#about"
                  onClick={handleMenuItemClick}
                >
                  <div className="font-mono text-[#ABB2BF] transition-colors duration-300 group-hover:text-[#98C379]">
                    {"<About />"}
                  </div>
                </Link>
              </li>
              <li className="border-b border-[#333333] md:border-none">
                <Link
                  className="block px-4 py-3 md:py-2 no-underline outline-none hover:no-underline group"
                  href="/#experience"
                  onClick={handleMenuItemClick}
                >
                  <div className="font-mono text-[#ABB2BF] transition-colors duration-300 group-hover:text-[#98C379]">
                    {"<Experience />"}
                  </div>
                </Link>
              </li>
              <li className="border-b border-[#333333] md:border-none">
                <Link
                  className="block px-4 py-3 md:py-2 no-underline outline-none hover:no-underline group"
                  href="/#skills"
                  onClick={handleMenuItemClick}
                >
                  <div className="font-mono text-[#ABB2BF] transition-colors duration-300 group-hover:text-[#98C379]">
                    {"<Skills />"}
                  </div>
                </Link>
              </li>
              <li className="border-b border-[#333333] md:border-none">
                <Link
                  className="block px-4 py-3 md:py-2 no-underline outline-none hover:no-underline group"
                  href="/#education"
                  onClick={handleMenuItemClick}
                >
                  <div className="font-mono text-[#ABB2BF] transition-colors duration-300 group-hover:text-[#98C379]">
                    {"<Education />"}
                  </div>
                </Link>
              </li>
              <li className="border-b border-[#333333] md:border-none">
                <Link
                  className="block px-4 py-3 md:py-2 no-underline outline-none hover:no-underline group"
                  href="/#projects"
                  onClick={handleMenuItemClick}
                >
                  <div className="font-mono text-[#ABB2BF] transition-colors duration-300 group-hover:text-[#98C379]">
                    {"<Projects />"}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
