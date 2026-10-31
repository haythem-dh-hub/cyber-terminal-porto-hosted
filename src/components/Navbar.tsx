"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-terminal-black/80 backdrop-blur-md border-terminal-green/30 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* CLI Prompt */}
        <div className="flex items-center space-x-2 font-mono text-sm">
          <span className="text-terminal-green">Haythem.Difallah</span>
          <span className="text-terminal-gray">@</span>
          <span className="text-terminal-cyan">portfolio</span>
          <span className="text-terminal-gray">:</span>
          <span className="text-terminal-cyan">~</span>
          <span className="text-terminal-green">$</span>
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-terminal-green"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative font-mono text-sm text-terminal-gray hover:text-terminal-green transition-colors"
            >
              <span>{link.name}</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-terminal-green shadow-[0_0_8px_#00ff88]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="flex items-center space-x-2 font-mono text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green"></span>
          </span>
          <span className="text-terminal-green neon-text-green">Available</span>
        </div>
      </div>
    </nav>
  );
}
