"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { GiBabyBottle } from "react-icons/gi";

const navLinks = [
  { href: "#presentation", label: "Présentation" },
  { href: "#programme", label: "Programme" },
  { href: "#admission", label: "Admission" },
  { href: "#contact", label: "Contact" },
];

interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  active: string;
}

export default function Navbar({ open, setOpen, active }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-lg"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <a href="#presentation" className="flex items-center gap-3 group">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-200 bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg mr-2">
            <GiBabyBottle className="text-blue-500 text-2xl" />
          </span>
          <div className="flex flex-col">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="font-extrabold text-xl text-blue-900 leading-tight tracking-tight">Garderie Aimée Inc.</motion.span>
            <span className="text-xs text-blue-400 font-semibold italic tracking-wide mt-0.5">Une garderie de qualité</span>
          </div>
        </a>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
        >
          <FaBars className="text-2xl text-blue-900" />
        </button>
        <ul className="hidden md:flex gap-4 text-base font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 transition-colors duration-200 focus:outline-none group"
                tabIndex={0}
              >
                <span className={`z-0 absolute left-0 top-1/2 -translate-y-1/2 h-8 w-full rounded-full transition-all duration-300 ${active === link.href ? 'bg-blue-100 shadow-md scale-100' : 'scale-0'}`}></span>
                <span className={`relative z-10 ${active === link.href ? 'text-blue-700' : 'text-blue-900 group-hover:text-blue-700'}`}>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
} 