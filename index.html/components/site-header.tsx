"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Casos de Éxito", href: "#casos-de-exito" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"}`}>
      <nav className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo (if any, otherwise just the brand) */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-too-easy.png"
            alt="Too Easy"
            width={40}
            height={40}
            className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          />
          <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
            Too-Easy
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <nav className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button - Always visible */}
          <div className="opacity-100 pointer-events-auto">
            <a
              href="https://wa.me/34643774904"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-white transition-luxury hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] group"
            >
              Contactarnos
              <span className="ml-2.5 flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white/90 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 overflow-hidden rounded-2xl"
          >
            <div className="flex flex-col space-y-2 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium py-2 border-b border-white/5 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default SiteHeader;
