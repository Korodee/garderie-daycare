"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaClock,
  FaGlobe,
  FaHandPaper,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone className="text-2xl text-green-500" />,
    label: "Téléphone",
    value: "514 747-4114",
    sub: "Appelez-nous pour plus d'informations",
    ping: true,
  },
  {
    icon: <FaEnvelope className="text-2xl text-orange-500" />,
    label: "Courriel",
    value: (
      <>
        garderieaimee
        <wbr />
        @hotmail.com
      </>
    ),
    sub: "Contactez-nous par email",
    ping: true,
  },
  {
    icon: <FaFax className="text-2xl text-purple-500" />,
    label: "Télécopieur",
    value: "514 747-2695",
    sub: "Pour les documents administratifs",
  },
  {
    icon: <FaClock className="text-2xl text-blue-500" />,
    label: "Horaires",
    value: "Lun-Ven: 7h00 - 18h00",
    sub: "",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className=" bg-gradient-to-br px-4 from-indigo-50 via-blue-50 to-pink-50 relative overflow-hidden"
    >
      {/* Animated pastel background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-indigo-200 rounded-full opacity-30 blur-2xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-200 rounded-full opacity-30 blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-blue-200 rounded-full opacity-30 blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl animate-blob animation-delay-1000"></div>
      </div>

      {/* Hero area with animated mailbox/chat bubble */}
      <div className="relative z-10 flex flex-col items-center my-20">
        <motion.div
          initial={{ scale: 0.8, rotate: -8 }}
          animate={{ scale: [0.8, 1.05, 1], rotate: [0, 8, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center mb-6 shadow-2xl"
        >
          <FaPaperPlane className="text-white text-5xl drop-shadow" />
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg text-center">
          Contactez-Nous
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-900 font-semibold text-lg shadow mb-4">
          <FaHandPaper className="text-indigo-400 animate-wave" /> Toujours à
          l’écoute !
        </div>
        <p className="text-xl text-slate-700 max-w-2xl text-center mb-2">
          Contactez-nous pour toute question concernant nos services et
          l&apos;inscription de votre enfant.
        </p>
      </div>

      {/* Wavy divider */}
      <div className="-mt-10 mb-12">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16"
        >
          <path
            fill="url(#contact-wave)"
            d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"
          />
          <defs>
            <linearGradient
              id="contact-wave"
              x1="0"
              x2="1440"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#c7d2fe" />
              <stop offset="0.5" stopColor="#fbcfe8" />
              <stop offset="1" stopColor="#a5b4fc" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Vertical Contact Strip */}
      <div className="relative z-10 max-w-xl mx-auto mb-24">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-4 py-8 md:p-10 shadow-2xl border-2 border-white/60 flex flex-col gap-8">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 relative"
            >
              <div className="relative">
                <span className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-pink-100 flex items-center justify-center shadow text-2xl">
                  {info.icon}
                </span>
                {info.ping && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 animate-ping"></span>
                )}
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-slate-800">
                  {info.label}
                </div>
                <div className="text-xl font-extrabold text-indigo-600 mb-1">
                  {info.value}
                </div>
                <div className="text-slate-600 text-base">{info.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map/Location Card */}
      <div className="relative z-10 max-w-4xl mx-auto mb-14">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-4 py-8 md:p-10 shadow-2xl border-2 border-white/60 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center mb-4 shadow-lg">
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-indigo-700">
            Notre Adresse
          </h3>
          <div className="text-lg font-semibold text-slate-800 mb-1">
            1730, rue Poirier
          </div>
          <div className="text-base text-slate-600 mb-2">
            Saint-Laurent (Québec) H4L 1J3
          </div>
          <div className="rounded-2xl h-64 w-full overflow-hidden mt-4 shadow-lg border-2 border-white/60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.198847456317!2d-73.7174!3d45.5017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2s1730%20Rue%20Poirier%2C%20Saint-Laurent%2C%20QC%20H4L%201J3!5e0!3m2!1sen!2sca!4v1703123456789!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de la Garderie Aimée Inc."
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Sticky/Floating Online Registration CTA */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <a
          href="https://www.laplace0-5.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-2xl text-lg hover:scale-105 transition-transform animate-bounce-slow"
        >
          <span className="text-2xl">
            <FaGlobe />
          </span>
          Inscription en ligne
        </a>
      </div>
    </section>
  );
}
