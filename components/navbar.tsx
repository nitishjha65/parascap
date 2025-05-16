"use client";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Highlight active route
  const isActive = (path: string) => pathname === path;

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) setIsMenuOpen(false); // Close menu on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Close menu on resize (for desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Animate menu dropdown with GSAP
  useLayoutEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 bg-white/40  md:supports-[backdrop-filter]:bg-background/60 backdrop-blur  transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-parascap-green text-white flex items-center justify-center rounded-md mr-2">
                <span className="font-bold text-sm md:text-base">PC</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-parascap-green">
                ParasCap
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 mr-3 text-parascap-green">
            {["/", "/about", "/blogs", "/contact"].map((path) => (
              <Link
                key={path}
                href={path}
                className={`font-medium transition-colors ${
                  isActive(path)
                    ? "text-parascap-lightGreen"
                    : "hover:text-parascap-lightGreen"
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).replace(/^\w/, (c) => c.toUpperCase())}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-parascap-green p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 left-0 w-full bg-gray-50 py-4 border-t border-gray-100 z-40 "
        >
          <nav className="flex flex-col space-y-4 text-parascap-green px-4">
            {["/", "/about", "/blogs", "/contact"].map((path) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors py-2 px-1 ${
                  isActive(path)
                    ? "text-parascap-lightGreen"
                    : "hover:text-parascap-lightGreen"
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).replace(/^\w/, (c) => c.toUpperCase())}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
