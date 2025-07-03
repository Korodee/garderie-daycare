"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#presentation", label: "Présentation" },
  { href: "#programme", label: "Programme" },
  { href: "#admission", label: "Admission" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].href);

  // Active section logic (optional, can be improved)
  React.useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const idx = offsets.findIndex(top => top > 80);
      setActive(navLinks[Math.max(0, idx - 1)].href);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar open={mobileNavOpen} setOpen={setMobileNavOpen} active={active} />
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
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-white/95 shadow-xl z-[100] flex flex-col pt-6 px-6 pb-8 rounded-l-3xl"
            style={{ borderTopLeftRadius: '2rem', borderBottomLeftRadius: '2rem' }}
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
                  className={`block text-xl font-bold px-4 py-3 rounded-lg transition-colors duration-200 ${active === link.href ? "text-blue-700 bg-blue-100" : "text-blue-900 hover:text-blue-700"}`}
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
      <main className="pt-24">
        <section id="presentation" className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 py-16">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Garderie Aimée Inc. – Une garderie de qualité</h1>
            <p className="text-lg md:text-xl text-gray-600">Présentation de la garderie et informations principales.</p>
          </div>
        </section>
        <section id="programme" className="min-h-[40vh] py-16 bg-white flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Programme éducatif</h2>
            <p className="text-lg text-gray-600">Description du programme, environnement bilingue, équipe éducative, activités.</p>
          </div>
        </section>
        <section id="admission" className="min-h-[40vh] py-16 bg-blue-50 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Admission et inscription</h2>
            <p className="text-lg text-gray-600">Procédure d'inscription, contribution réduite, informations importantes.</p>
          </div>
        </section>
        <section id="contact" className="min-h-[30vh] py-16 bg-white flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-lg text-gray-600">Adresse, téléphone, courriel, horaires d'ouverture.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
