// components/ui/Footer.tsx
"use client";

import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface/50 border-t border-white/5 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Owais Khan. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/owaisskhann/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/owaiskhan123455"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/uxelio_expert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <Instagram size={20} />
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-text-muted text-xs">
            Built with Next.js, Tailwind CSS & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;