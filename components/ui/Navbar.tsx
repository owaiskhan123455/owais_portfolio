// components/ui/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../../lib/utils";

// ... rest unchanged

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-4">
        <nav className="container-custom">
          <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
            <Link
              href="#home"
              className="text-2xl font-bold font-display tracking-tighter gradient-text"
            >
              OK.
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-white",
                      activeSection === link.href.substring(1)
                        ? "text-white"
                        : "text-text-muted"
                    )}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                className="md:hidden p-2 rounded-full hover:bg-white/5"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-display font-bold hover:gradient-text transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;