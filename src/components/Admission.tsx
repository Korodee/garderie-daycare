"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaEnvelopeOpenText, FaFileAlt, FaCalendarAlt, FaDollarSign, FaInfoCircle, FaStar, FaUsers, FaHeart } from "react-icons/fa";

const requirements = [
  { icon: <FaFileAlt className="text-xl text-blue-500" />, title: "Formulaire d'inscription" },
  { icon: <FaCalendarAlt className="text-xl text-green-500" />, title: "Certificat de naissance" },
  { icon: <FaCheckCircle className="text-xl text-purple-500" />, title: "Carnet de vaccination" },
  { icon: <FaDollarSign className="text-xl text-orange-500" />, title: "Preuve de revenus" }
];

const process = [
  { title: "Inscription en ligne", description: "Inscriptions exclusivement via www.laplace0-5.com" },
  { title: "Demande enregistrée", description: "Votre demande est enregistrée sur La Place 0-5" },
  { title: "Liste d'attente", description: "Placement selon l'ordre de la liste d'attente" },
  { title: "Contact automatique", description: "Nous vous contactons dès qu'une place correspondant à votre demande devient disponible" }
];

export default function Admission() {
  return (
    <section id="admission" className="py-32 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Hero area with animated envelope/checklist */}
      <div className="relative z-10 flex flex-col items-center mb-20">
        <motion.div
          initial={{ scale: 0.8, rotate: -8 }}
          animate={{ scale: [0.8, 1.05, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-28 h-28 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center mb-6 shadow-2xl"
        >
          <FaEnvelopeOpenText className="text-white text-5xl drop-shadow" />
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg text-center">
          Admission & inscription
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-900 font-semibold text-lg shadow mb-4">
          <FaInfoCircle className="text-orange-400" />
          Garderie subventionnée
        </div>
        <p className="text-xl text-slate-700 max-w-2xl text-center mb-2">
          Inscription simple et rapide via La Place 0-5.
        </p>
        <a href="https://www.laplace0-5.com" target="_blank" rel="noopener noreferrer" className="mt-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
          Accéder à La Place 0-5
        </a>
      </div>

      {/* Wavy divider */}
      <div className="-mt-10 mb-12">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="url(#admission-wave)" d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" />
          <defs>
            <linearGradient id="admission-wave" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fdba74" />
              <stop offset="0.5" stopColor="#fbcfe8" />
              <stop offset="1" stopColor="#fef9c3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Requirements Checklist */}
      <div className="relative z-10 max-w-2xl mx-auto mb-24">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-4 py-8 md:p-10 shadow-2xl border-2 border-white/60">
          <h3 className="text-2xl font-bold mb-6 text-orange-700 flex items-center gap-2">
            Documents Requis
          </h3>
          <ul className="space-y-4">
            {requirements.map((req, i) => (
              <motion.li
                key={req.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-lg"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center shadow">
                  {req.icon}
                </span>
                <span className="font-semibold text-slate-800">{req.title}</span>
                {/* <FaCheckCircle className="text-green-400 ml-2 animate-bounce-slow" /> */}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vertical Stepper/Timeline for Process */}
      <div className="relative z-10 max-w-3xl mx-auto mb-24">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-8 text-pink-700 flex items-center gap-2">
            <FaEnvelopeOpenText className="text-pink-400" /> Processus d&apos;Inscription
          </h3>
          <div className="relative w-full">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-pink-200 to-yellow-200 rounded-full"></div>
            <ul className="space-y-12 pl-16">
              {process.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg border-4 border-white">
                    {i + 1}
                  </div>
                  <div className="bg-white/90 rounded-2xl p-6 shadow border border-orange-100">
                    <div className="text-xl font-bold text-orange-700 mb-1">{step.title}</div>
                    <div className="text-slate-700 text-base">{step.description}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contribution Calculator Card */}
      <div className="relative z-10 max-w-xl mx-auto mb-24">
        <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-4 py-8 md:py-10 md:p-10 shadow-2xl border-2 border-white/60 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-orange-700 flex items-center gap-2">
            <FaDollarSign className="text-orange-400" /> Contribution réduite
          </h3>
          <p className="text-lg text-slate-700 mb-4 text-center">
            La garderie est subventionnée, et les parents paient uniquement la contribution réduite fixée par le gouvernement du Québec.
          </p>
          <p className="text-lg text-slate-700 mb-4 text-center">
            Aucun frais supplémentaire n’est exigé, sauf en cas de services occasionnels ou spéciaux.
          </p>
          <a href="https://www.laplace0-5.com" target="_blank" rel="noopener noreferrer" className="mt-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
            Calculer ma contribution
          </a>
        </div>
      </div>

      {/* Contact and Info Cards */}
      <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mb-8">
        <div className="bg-gradient-to-r from-orange-600 to-pink-500 rounded-3xl p-6 md:p-10 text-white shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaInfoCircle className="text-white/80" /> Infos clés
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <FaCheckCircle className="text-xl mr-3 mt-1 flex-shrink-0 text-green-200" />
                <span>Inscription en ligne via La Place 0-5</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-xl mr-3 mt-1 flex-shrink-0 text-green-200" />
                <span>Ouvert toute l&apos;année (sauf congés fériés)</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-xl mr-3 mt-1 flex-shrink-0 text-green-200" />
                <span>Accueil des enfants de 0 à 5 ans</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-xl mr-3 mt-1 flex-shrink-0 text-green-200" />
                <span>Contribution réduite fixée par le gouvernement</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 md:p-10 text-white shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-white/80" /> Avantages de Notre Garderie
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaStar className="text-xl mr-4 text-yellow-300" />
                <div>
                  <div className="font-semibold">35+ années d&apos;expérience</div>
                  <div className="text-sm opacity-90">Excellence reconnue depuis 1987</div>
                </div>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-xl mr-4 text-blue-200" />
                <div>
                  <div className="font-semibold">Équipe qualifiée</div>
                  <div className="text-sm opacity-90">Éducatrices diplômées et expérimentées</div>
                </div>
              </div>
              <div className="flex items-center">
                <FaHeart className="text-xl mr-4 text-pink-200" />
                <div>
                  <div className="font-semibold">Approche bienveillante</div>
                  <div className="text-sm opacity-90">Développement à son propre rythme</div>
                </div>
              </div>
              <div className="pt-4">
                <a href="#contact" className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 block text-center">
                  Nous Contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 