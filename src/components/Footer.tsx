import React from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

const links = [
  { href: "#presentation", label: "Présentation" },
  { href: "#programme", label: "Programme" },
  { href: "#admission", label: "Admission" },
  { href: "/gallery", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#f8fafc] to-[#eaf1fb] pt-14 pb-8 text-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
                <Image
                  src="/globe.svg"
                  alt="Garderie logo"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h2 className="font-bold text-xl text-slate-900">
                  Garderie Aimée Inc.
                </h2>
                <p className="text-sm text-slate-500">
                  Une garderie de qualité
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Depuis 1987, nous offrons un environnement sécuritaire et
              stimulant pour le développement harmonieux de votre enfant.
            </p>
          </div>

          {/* Contact Cards */}
          <div>
            <h3 className="font-semibold text-lg text-slate-900 mb-4">
              Contact
            </h3>
            <div className="flex flex-col md:flex-row flex-wrap gap-4">
              <a
                href="tel:5147474114"
                className="flex-1 min-w-[140px] bg-white rounded-xl shadow p-4 flex items-center gap-3 hover:shadow-md transition group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
                  <FaPhoneAlt className="text-blue-600 text-xl" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900">Téléphone</div>
                  <div className="text-sm text-slate-500">514 747-4114</div>
                </div>
              </a>
              <a
                href="mailto:garderieaimee@hotmail.com"
                className="flex-1 min-w-[140px] bg-white rounded-xl shadow p-4 flex items-center gap-3 hover:shadow-md transition group"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </span>
                <div>
                  <div className="font-semibold text-slate-900">Courriel</div>
                  <div className="text-sm text-slate-500 truncate">
                    garderieaimee@hotmail.com
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-4 bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </span>
              <div>
                <div className="font-semibold text-slate-900">Adresse</div>
                <div className="text-sm text-slate-500 leading-tight">
                  1730, rue Poirier
                  <br />
                  Saint-Laurent (Québec) H4L 1J3
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50">
                <FaPhoneAlt className="text-blue-600 text-xl" />
              </span>
              <div>
                <div className="font-semibold text-slate-900">Télécopieur</div>
                <div className="text-sm text-slate-500">514 747-2695</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-slate-900 mb-4">
              Liens rapides
            </h3>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 bg-white rounded-xl shadow p-3 hover:shadow-md transition group"
                >
                  <FaChevronRight className="text-blue-400 text-base group-hover:text-blue-600 transition" />
                  <span className="text-slate-700 group-hover:text-blue-700 font-medium transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-slate-900 mb-4">
              Horaires
            </h3>
            <div className="bg-white rounded-xl shadow p-4">
              <div className="font-semibold text-slate-900 mb-1">
                Horaires d&apos;ouverture
              </div>
              <div className="text-sm text-slate-500">
                Lundi - Vendredi
                <br />
                7h00 - 18h00
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Garderie Aimée Inc. Tous droits
            réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
