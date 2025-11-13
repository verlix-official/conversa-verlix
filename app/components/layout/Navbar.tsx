"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarConfig } from "@/config/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const ticking = useRef(false);

  // ✅ Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setShowNavbar(currentScroll < lastScrollY || currentScroll < 80);
          setLastScrollY(currentScroll);

          const docHeight = document.body.scrollHeight - window.innerHeight;
          setScrollProgress((currentScroll / docHeight) * 100);

          navbarConfig.navLinks.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(link.name.toLowerCase());
              }
            }
          });

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-violet-600 z-50"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />

      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -120 }}
            animate={{ y: 0 }}
            exit={{ y: -120 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

              {/* Left: Logo + Links */}
              <div className="flex items-center space-x-8">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="relative h-8 w-8">
                    <Image
                      src={navbarConfig.logoSrc || "/default-logo.svg"}
                      alt={navbarConfig.brandName}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg md:text-xl tracking-tight text-gray-800 dark:text-gray-100">
                    {navbarConfig.brandName}
                  </span>
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center space-x-6">
                  {navbarConfig.navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-gray-700 dark:text-gray-200 transition-colors duration-300 ${activeSection === link.name.toLowerCase()
                            ? "text-violet-600 dark:text-violet-400 font-semibold"
                            : "hover:text-violet-600 dark:hover:text-violet-400"
                          }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <ModeToggle />
                <Link href={navbarConfig.ctaSecondary.href}>
                  <Button variant="outline" size="sm">
                    {navbarConfig.ctaSecondary.text}
                  </Button>
                </Link>
                <Link href={navbarConfig.ctaPrimary.href}>
                  <Button
                    size="sm"
                    className="bg-violet-600 hover:bg-violet-700 text-white"
                  >
                    {navbarConfig.ctaPrimary.text}
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                  <DropdownMenuTrigger asChild>
                    <button className="p-2 text-gray-700 dark:text-gray-300 text-xl">
                      ☰
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white dark:bg-black/90 backdrop-blur-lg shadow-lg"
                  >
                    {navbarConfig.navLinks.map((link) => (
                      <DropdownMenuItem key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem>
                      <Link href={navbarConfig.ctaSecondary.href}>Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={navbarConfig.ctaPrimary.href}>Try Free</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ModeToggle />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
