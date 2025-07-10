"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const navLinks = [
  { href: "/#presentation", label: "Présentation" },
  { href: "/#programme", label: "Programme" },
  { href: "/gallery", label: "Galerie" },
  { href: "/#admission", label: "Admission" },
  { href: "/#contact", label: "Contact" },
];

export default function GalleryPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [active] = useState("/gallery");

  return (
    <>
      {/* Navbar as regular component */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700">
        <Navbar open={mobileNavOpen} setOpen={setMobileNavOpen} active={active} />
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-black/80 bg-opacity-80 backdrop-blur-sm"
            onClick={() => setMobileNavOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-white/95 shadow-xl z-[100] flex flex-col pt-6 px-6 pb-8 rounded-l-3xl"
            style={{
              borderTopLeftRadius: "2rem",
              borderBottomLeftRadius: "2rem",
            }}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 hover:bg-blue-100 shadow focus:outline-none"
              aria-label="Fermer le menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <FaTimes className="text-2xl text-blue-900" />
            </button>
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`block text-xl font-bold px-4 py-3 rounded-lg transition-colors duration-200 ${
                    active === link.href
                      ? "text-blue-700 bg-blue-100"
                      : "text-blue-900 hover:text-blue-700"
                  }`}
                  onClick={() => setMobileNavOpen(false)}
                  tabIndex={0}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
} 