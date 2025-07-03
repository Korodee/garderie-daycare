import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFax, FaChevronRight } from "react-icons/fa";

const links = [
  { href: "#presentation", label: "Présentation" },
  { href: "#programme", label: "Programme" },
  { href: "#admission", label: "Admission" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 border-t border-blue-100 py-12 mt-16 text-gray-700 rounded-t-3xl shadow-inner animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Branding */}
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-blue-200 bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg">
            <Image src="/globe.svg" alt="Garderie logo" width={36} height={36} className="rounded-full" />
          </span>
          <span className="font-extrabold text-lg text-blue-900">Garderie Aimée Inc.</span>
          <span className="text-xs text-blue-500 font-medium">Une garderie de qualité</span>
          <p className="text-sm mt-2 text-gray-500">Depuis 1987, au service des familles de Saint-Laurent.</p>
        </div>
        {/* Contact */}
        <div className="text-sm">
          <h3 className="font-semibold mb-3 text-blue-900">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-400" />1730, rue Poirier<br />Saint-Laurent (Québec) H4L 1J3</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-blue-400" /><a href="tel:5147474114" className="hover:underline">514 747-4114</a></li>
            <li className="flex items-center gap-2"><FaFax className="text-blue-400" />514 747-2695</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-blue-400" /><a href="mailto:garderieaimee@hotmail.com" className="hover:underline">garderieaimee@hotmail.com</a></li>
          </ul>
        </div>
        {/* Quick Links - Liens rapides */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-semibold text-blue-900">Liens rapides</h3>
          </div>
          <div className="bg-gradient-to-br from-white/90 to-blue-50/60 border border-blue-100 rounded-2xl shadow p-4">
            <ul className="space-y-2 text-sm">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-transform duration-200 hover:scale-105 group focus:outline-none"
                  >
                    <FaChevronRight className="text-blue-300 group-hover:text-blue-500 transition" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Social & Legal */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-3 text-blue-900">Suivez-nous</h3>
          <div className="flex gap-3 mb-2">
            <a href="#" aria-label="Facebook" className="w-9 h-9 bg-blue-200 rounded-full flex items-center justify-center hover:bg-blue-300 transition"><FaFacebookF className="text-blue-700 text-lg" /></a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition"><FaInstagram className="text-pink-600 text-lg" /></a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition"><FaLinkedinIn className="text-blue-700 text-lg" /></a>
          </div>
          <div className="border-t border-blue-100 my-2" />
          <div className="text-xs text-gray-400 mt-2">&copy; {new Date().getFullYear()} Garderie Aimée Inc. Tous droits réservés.</div>
          <div className="text-xs text-gray-400">Politique de confidentialité</div>
        </div>
      </div>
    </footer>
  );
} 