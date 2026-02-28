"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Prayers", href: "#prayers" },
  { label: "Family", href: "#family" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(0, 45, 45, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl glow-animation"
              style={{ background: "linear-gradient(135deg, #006B6B, #008A8A)" }}
            >
              🤲
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-tight">DuaCircle</span>
              <div className="text-xs" style={{ color: "#C9A55A", fontFamily: "serif" }}>
                دعا حلقہ
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#C9A55A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/login"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
              }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #C9A55A, #F9C252)",
                color: "#2C2C2C",
              }}
            >
              Download Free
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-6"
            style={{
              background: "rgba(0, 35, 35, 0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium py-2 border-b border-white/5"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-3 rounded-xl text-center text-sm font-semibold"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                }}
              >
                Sign In
              </a>
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="py-3 rounded-xl text-center text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #C9A55A, #F9C252)",
                  color: "#2C2C2C",
                }}
              >
                Download Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
