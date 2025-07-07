"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaLeaf, FaGamepad, FaUtensils, FaBed, FaThermometerHalf, FaBuilding, FaStar } from "react-icons/fa";

const facilities = [
  {
    icon: <FaShieldAlt className="text-4xl text-blue-500 drop-shadow" />, title: "Sécurité maximale", description: "Système de caméras de surveillance, entrée sécurisée avec accès restreint"
  },
  {
    icon: <FaLeaf className="text-4xl text-green-500 drop-shadow" />, title: "Espace extérieur sécurisé", description: "Modules de jeux adaptés à chaque âge avec surface sécuritaire"
  },
  {
    icon: <FaGamepad className="text-4xl text-purple-500 drop-shadow" />, title: "Salles rénovées 2025", description: "Salles de classe rénovées et aménagées selon chaque groupe d'âge"
  },
  {
    icon: <FaUtensils className="text-4xl text-orange-500 drop-shadow" />, title: "Cuisine sur place", description: "Repas chauds, variés et entièrement frais préparés chaque jour"
  },
  {
    icon: <FaBed className="text-4xl text-pink-500 drop-shadow" />, title: "Zones de repos", description: "Berceaux pour poupons et petits lits pour les plus grands"
  },
  {
    icon: <FaThermometerHalf className="text-4xl text-red-500 drop-shadow" />, title: "Hygiène rigoureuse", description: "Respect rigoureux des normes d'hygiène et de désinfection"
  }
];

const features = [
  { title: "Capacité totale", value: "80 enfants", description: "15 poupons (0-18 mois) + 65 enfants (18mo-5ans)" },
  { title: "Rénovation 2025", value: "Complète", description: "Rénovation intérieure complète des installations" },
  { title: "Repas quotidiens", value: "3 repas", description: "2 collations + 1 repas chaud selon recommandations ministérielles" },
  { title: "Horaires", value: "7h-18h", description: "Lundi au vendredi, toute l'année" }
];

export default function Facilities() {
  return (
    <section id="installations" className="py-32 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 relative overflow-hidden">
      {/* Playful illustrated background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-green-200 rounded-full opacity-30 blur-2xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-yellow-200 rounded-full opacity-30 blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-2xl animate-blob animation-delay-1000"></div>
      </div>

      {/* Hero area */}
      <div className="relative z-10 flex flex-col items-center mb-10  mx-auto max-w-6xl">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center mb-6 shadow-2xl">
          <FaBuilding className="text-white text-5xl drop-shadow" />
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-600 via-blue-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg text-center">
          Nos Installations
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-900 font-semibold text-lg shadow mb-4">
          <FaStar className="text-yellow-400" />
          Rénovation complète 2025
        </div>
        <p className="text-xl text-slate-700 max-w-2xl text-center mb-2">
          La Garderie Aimée Inc. offre un environnement physique moderne, sécuritaire et stimulant, parfaitement adapté aux besoins des enfants de 0 à 5 ans.
        </p>
      </div>

      {/* Wavy divider */}
      <div className="-mt-10 mb-12">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="url(#facilities-wave)" d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" />
          <defs>
            <linearGradient id="facilities-wave" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#bbf7d0" />
              <stop offset="0.5" stopColor="#bae6fd" />
              <stop offset="1" stopColor="#fef9c3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Facilities Grid */}
      <div className="relative z-10 max-w-6xl mx-auto mb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border-2 border-white/60 flex flex-col items-center text-center overflow-hidden h-full">
                {/* Floating icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  {facility.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800 drop-shadow-sm">
                  {facility.title}
                </h3>
                <p className="text-slate-700 leading-relaxed text-md">
                  {facility.description}
                </p>
                {/* Pastel glow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-10 bg-gradient-to-r from-green-200 via-blue-200 to-yellow-200 rounded-full blur-2xl opacity-40 z-0"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wavy divider */}
      <div className="mb-16">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="url(#facilities-wave2)" d="M0,40 C360,120 1080,0 1440,40 L1440,120 L0,120 Z" />
          <defs>
            <linearGradient id="facilities-wave2" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fef9c3" />
              <stop offset="0.5" stopColor="#bae6fd" />
              <stop offset="1" stopColor="#bbf7d0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 p-12 mb-10 mx-auto max-w-7xl"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-slate-800">
            Capacité et Services
          </h3>
          <p className="text-lg text-slate-600">
            En 2025, nous avons complété une rénovation intérieure complète
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 shadow border border-white/60">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {feature.value}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-slate-800">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Wavy divider */}
      <div className="mb-16">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="url(#facilities-wave3)" d="M0,80 C360,0 1080,120 1440,80 L1440,120 L0,120 Z" />
          <defs>
            <linearGradient id="facilities-wave3" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#bae6fd" />
              <stop offset="0.5" stopColor="#bbf7d0" />
              <stop offset="1" stopColor="#fef9c3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Kitchen and Meals */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-12 text-white shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Cuisine sur place – repas frais tous les jours
            </h3>
            <p className="text-xl mb-8 max-w-2xl">
              Une cuisinière sur place prépare chaque jour des repas chauds, variés et entièrement frais, selon les recommandations du ministère.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Deux collations équilibrées</h4>
                <p>Et un repas chaud sont fournis chaque jour</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Menu varié, sain</h4>
                <p>Et adapté aux besoins nutritionnels des enfants</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Adaptations possibles</h4>
                <p>Pour allergies et restrictions alimentaires (sur demande)</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center">
            <FaUtensils className="text-white text-7xl drop-shadow-xl" />
          </div>
        </div>
      </motion.div>

      {/* Safety and Security */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 mb-8 mx-auto max-w-7xl"
      >
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">
            Sécurité et Prévention
          </h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Système de caméras de surveillance dans les zones clés
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Entrée sécurisée avec accès restreint aux personnes autorisées
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Plan d&apos;évacuation d&apos;urgence affiché, pratiqué régulièrement
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Plan d&apos;intrusion mis en place, avec protocoles de confinement
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Équipe formée et entraînée aux procédures d&apos;évacuation et de premiers soins
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">
            🛝 Espace extérieur sécurisé
          </h3>
          <p className="text-lg mb-6">
            Un espace de jeu extérieur accueille les enfants tous les jours (selon la météo), avec :
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Modules de jeux adaptés à chaque âge
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Surface sécuritaire
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Zones ombragées pour les journées ensoleillées
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
              Respect rigoureux des normes d&apos;hygiène et de désinfection
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
} 