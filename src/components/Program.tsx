"use client";

import { motion } from "framer-motion";
import { FaBook, FaMusic, FaPaintBrush, FaRunning, FaLanguage, FaClock, FaChild, FaChalkboardTeacher, FaGlobeAmericas, FaSmileBeam, FaEnvelopeOpenText, FaMobileAlt, FaChartLine } from "react-icons/fa";
import Image from 'next/image';

const Program = () => {
  const activities = [
    {
      icon: <FaBook className="text-2xl text-blue-500" />,
      title: "Activités sensorielles",
      description: "Exploration tactile, visuelle et auditive"
    },
    {
      icon: <FaMusic className="text-2xl text-purple-500" />,
      title: "Chansons et histoires",
      description: "Développement du langage et de l&apos;imagination"
    },
    {
      icon: <FaPaintBrush className="text-2xl text-pink-500" />,
      title: "Jeux symboliques",
      description: "Blocs, coin lecture et activités artistiques"
    },
    {
      icon: <FaRunning className="text-2xl text-green-500" />,
      title: "Motricité fine et globale",
      description: "Ateliers et jeux extérieurs quotidiens"
    },
    {
      icon: <FaLanguage className="text-2xl text-orange-500" />,
      title: "Activités bilingues",
      description: "Intégration quotidienne français et anglais"
    },
    {
      icon: <FaClock className="text-2xl text-indigo-500" />,
      title: "Apprentissages fondamentaux",
      description: "Chiffres, lettres, formes et couleurs"
    }
  ];

  return (
    <section id="programme" className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 relative overflow-hidden">
      {/* Playful floating shapes */}
      <div className="absolute -top-16 left-1/4 w-40 h-40 bg-green-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-yellow-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob animation-delay-4000"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
            Programme Éducatif : HighScope
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Une approche éducative fondée sur l&apos;apprentissage actif en environnement bilingue (français et anglais).
          </p>
        </motion.div>

        {/* Playful Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 items-stretch">
          {activities.map((activity, index) => {
            const pastelBg = [
              'from-green-200 to-blue-100',
              'from-pink-200 to-yellow-100',
              'from-blue-200 to-green-100',
              'from-yellow-200 to-pink-100',
              'from-purple-200 to-blue-100',
              'from-orange-200 to-yellow-100'
            ];
            const bg = pastelBg[index % pastelBg.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className={`bg-gradient-to-br ${bg} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 glassy-card text-center relative overflow-hidden h-full flex flex-col justify-between`}>
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-14 rounded-full bg-gradient-to-r from-white/80 to-white/60 flex items-center justify-center text-4xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                      {activity.icon}
                    </div>
                    <h3 className="text-2xl font-extrabold mb-2 text-slate-800 drop-shadow-sm">
                      {activity.title}
                    </h3>
                    <p className="text-md text-slate-700 font-medium">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Redesigned HighScope Approach Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-14 text-white text-center mb-24 relative overflow-hidden"
        >
          {/* Playful icons/shapes */}
          <div className="absolute -top-10 left-10 w-24 h-24 bg-white opacity-10 rounded-full animate-blob"></div>
          <div className="absolute bottom-0 right-10 w-32 h-32 bg-yellow-200 opacity-10 rounded-full animate-blob animation-delay-2000"></div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 drop-shadow-sm flex items-center justify-center gap-3">
            <FaBook className="text-white/80" /> Approche HighScope
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-12 font-medium">
            Les enfants sont encouragés à explorer, à poser des questions, à faire des choix et à apprendre à travers
            leurs intérêts. Les éducatrices jouent un rôle actif dans l&apos;observation, le soutien et l&apos;enrichissement
            des expériences des enfants.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mx-auto">
            <div className="bg-white/20 rounded-2xl p-8 flex flex-col items-center">
              <FaChild className="text-5xl mb-2 text-pink-300 drop-shadow" />
              <div className="text-3xl font-bold mb-1">2-5</div>
              <div className="text-lg font-medium">Âge des enfants</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-8 flex flex-col items-center">
              <FaChalkboardTeacher className="text-5xl mb-2 text-blue-300 drop-shadow" />
              <div className="text-3xl font-bold mb-1">1:8</div>
              <div className="text-lg font-medium">Ratio éducateur/enfants</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-8 flex flex-col items-center">
              <FaGlobeAmericas className="text-5xl mb-2 text-green-300 drop-shadow" />
              <div className="text-3xl font-bold mb-1">2</div>
              <div className="text-lg font-medium">Langues d&apos;enseignement</div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic wavy SVG divider at the top */}
        <div className="-mt-16 mb-[-2px]">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path fill="url(#wave-gradient)" d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" />
            <defs>
              <linearGradient id="wave-gradient" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a7f3d0" />
                <stop offset="0.5" stopColor="#bae6fd" />
                <stop offset="1" stopColor="#fef9c3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section className="relative py-24 px-4 md:px-16 bg-gradient-to-br from-white via-blue-50 to-green-50 rounded-3xl shadow-2xl overflow-visible mb-32">
          {/* Floating pastel confetti and icons */}
          <div className="absolute top-10 left-10 w-8 h-8 bg-pink-200 rounded-full opacity-60 animate-bounce-slow"></div>
          <div className="absolute top-1/3 right-24 w-6 h-6 bg-yellow-200 rounded-full opacity-60 animate-bounce-slow animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-10 h-10 bg-blue-200 rounded-full opacity-60 animate-bounce-slow animation-delay-1000"></div>
          <FaLanguage className="absolute top-24 left-1/3 text-blue-300 text-4xl opacity-30 animate-float-slow" />
          <FaSmileBeam className="absolute bottom-24 right-1/4 text-yellow-300 text-4xl opacity-30 animate-float-slow animation-delay-1500" />
          {/* Animated organic blob image overlapping columns */}
          <div className="hidden md:block absolute top-1/2 right-[-120px] w-[680px] h-[680px] -translate-y-1/2 z-0 pointer-events-none select-none">
            <svg viewBox="0 0 480 480" className="w-full h-full absolute">
              <defs>
                <radialGradient id="blob-gradient" cx="60%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.5" />
                </radialGradient>
              </defs>
              <path d="M340,60Q400,120,400,240Q400,360,340,420Q240,480,140,420Q80,360,80,240Q80,120,140,60Q240,0,340,60Z" fill="url(#blob-gradient)" />
            </svg>
            <div className="w-full h-full absolute top-0 left-0 overflow-hidden" style={{ clipPath: 'url(#blob-clip)' }}>
              <Image
                src="/daycare-2.jpg"
                alt="Enfants jouant à la garderie Aimée"
                className="object-cover w-full h-full opacity-90 mix-blend-multiply animate-float-slow"
                style={{ borderRadius: '40% 60% 60% 40% / 50% 40% 60% 50%' }}
                width={480}
                height={480}
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" style={{ borderRadius: '40% 60% 60% 40% / 50% 40% 60% 50%' }} />
            </div>
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Headline, subtitle, and staggered cards */}
            <div>
              <h3 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                Environnement Bilingue HighScope
              </h3>
              <div className="inline-block mb-10 px-6 py-3 rounded-2xl bg-yellow-100 text-yellow-900 font-semibold text-lg shadow-lg">
                &ldquo;Ici, chaque journée est une aventure bilingue, pleine de découvertes et de rires.&rdquo;
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start mb-4 gap-5 bg-white/80 border-l-8 border-green-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-rotate-2 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-300 to-blue-200 flex items-center justify-center text-3xl text-green-700 shadow group-hover:scale-110 transition">
                  <FaRunning />
                </div>
                <div>
                  <div className="font-bold text-xl text-slate-800 mb-1">Organisation de l’environnement</div>
                  <ul className="list-disc ml-6 text-slate-700 text-base">
                    <li>Coins thématiques pour chaque type d’activité</li>
                    <li>Matériel accessible et organisé par les enfants</li>
                    <li>Espaces pour activités individuelles et de groupe</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start mb-4 gap-5 bg-white/80 border-l-8 border-blue-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:rotate-2 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-300 to-purple-200 flex items-center justify-center text-3xl text-blue-700 shadow group-hover:scale-110 transition">
                  <FaLanguage />
                </div>
                <div>
                  <div className="font-bold text-xl text-slate-800 mb-1">Intégration bilingue</div>
                  <div className="text-slate-700 text-base">
                    Français et anglais intégrés dans les routines, jeux, chansons, histoires et interactions quotidiennes.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 bg-white/80 border-l-8 border-yellow-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-rotate-2 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-300 to-pink-200 flex items-center justify-center text-3xl text-yellow-700 shadow group-hover:scale-110 transition">
                  <FaSmileBeam />
                </div>
                <div>
                  <div className="font-bold text-xl text-slate-800 mb-1">Épanouissement global</div>
                  <div className="text-slate-700 text-base">
                    Immersion linguistique naturelle favorisant le développement cognitif, langagier et social.
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Right: Animated blob image (already above) */}
          </div>
        </section>

        {/* Communication avec les Parents - DISTINCT TIMELINE REDESIGN */}
        <div className="relative mt-32 mb-24">
          <section className="relative py-20 px-4 md:px-16 bg-white rounded-3xl shadow-2xl overflow-visible">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-40 bottom-40 w-1 bg-gradient-to-b from-green-300 via-blue-300 to-orange-300 rounded-full z-0 md:hidden"></div>
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-12 md:gap-0 max-w-6xl mx-auto">
              {/* Steps */}
              <div className="flex-1 flex flex-col md:flex-row items-center md:items-end justify-between z-10">
                {/* Step 1: Email */}
                <div className="relative flex flex-col items-center md:items-start mb-12 md:mb-0 w-full md:w-1/3">
                  <div className="bg-green-100 rounded-2xl px-6 py-6 shadow-lg relative chat-bubble-left">
                    <div className="absolute -left-4 top-8 w-8 h-8 bg-green-100 rounded-full rotate-45"></div>
                    <FaEnvelopeOpenText className="text-3xl mb-2 text-green-500" />
                    <div className="font-bold text-lg text-slate-800 mb-1">Courriel Hebdomadaire</div>
                    <div className="text-slate-700 text-base mb-2">Chaque vendredi, nous envoyons un courriel informatif aux parents, comprenant :</div>
                    <ul className="text-slate-700 text-sm list-disc ml-5">
                      <li>Des photos de la semaine</li>
                      <li>Les activités thématiques préparées et animées par nos éducatrices</li>
                      <li>Un aperçu des apprentissages vécus par les enfants</li>
                    </ul>
                  </div>
                  {/* Timeline dot/connector */}
                  <div className="hidden md:block absolute right-[-32px] top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-green-300 to-blue-300 rounded-full border-4 border-white z-20"></div>
                </div>
                {/* Step 2: Kaymbu App */}
                <div className="relative flex flex-col items-center md:items-center mb-12 md:mb-0 w-full md:w-1/3">
                  <div className="bg-blue-100 rounded-2xl px-6 py-6 shadow-lg relative chat-bubble-center">
                    <div className="absolute left-1/2 -bottom-4 w-8 h-8 bg-blue-100 rounded-full rotate-45 md:hidden"></div>
                    <FaMobileAlt className="text-3xl mb-2 text-blue-500" />
                    <div className="font-bold text-lg text-slate-800 mb-1">Application Kaymbu</div>
                    <div className="text-slate-700 text-base mb-2">Plateforme sécurisée qui permet aux parents d&apos;accéder à :</div>
                    <ul className="text-slate-700 text-sm list-disc ml-5">
                      <li>Le rapport quotidien de leur enfant (repas, toilette, humeur, sieste, etc.)</li>
                      <li>Des observations sur les activités du jour</li>
                      <li>Un suivi personnalisé au quotidien</li>
                    </ul>
                  </div>
                  {/* Timeline dot/connector */}
                  <div className="hidden md:block absolute right-[-32px] top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-300 to-orange-300 rounded-full border-4 border-white z-20"></div>
                </div>
                {/* Step 3: Reports */}
                <div className="relative flex flex-col items-center md:items-end w-full md:w-1/3">
                  <div className="bg-orange-100 rounded-2xl px-6 py-6 shadow-lg relative chat-bubble-right">
                    <div className="absolute -right-4 top-8 w-8 h-8 bg-orange-100 rounded-full rotate-45"></div>
                    <FaChartLine className="text-3xl mb-2 text-orange-500" />
                    <div className="font-bold text-lg text-slate-800 mb-1">Rapports de Développement</div>
                    <div className="text-slate-700 text-base mb-2">Deux fois par année, nous remettons aux parents un rapport du développement global de leur enfant, comprenant :</div>
                    <ul className="text-slate-700 text-sm list-disc ml-5">
                      <li>Des observations précises effectuées par l&apos;éducatrice</li>
                      <li>Des photos illustrant les progrès dans différents domaines</li>
                      <li>Suivi motricité, langage, socialisation, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Phone mockup with Kaymbu screenshot (placeholder) */}
              <div className="hidden md:flex flex-col items-center justify-center ml-12">
                <div className="w-48 h-96 bg-gray-200 rounded-3xl shadow-2xl border-4 border-blue-300 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-300 rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-blue-400 font-bold text-lg">Kaymbu App</span>
                </div>
                <div className="mt-4 text-xs text-slate-500">Aperçu de l&apos;application parent</div>
              </div>
            </div>
            {/* Parent testimonial */}
            <div className="max-w-2xl mx-auto mt-16">
              <div className="px-6 py-4 rounded-xl bg-green-50 text-green-900 font-semibold text-lg shadow text-center">
                &quot;Grâce à la communication régulière de la garderie, je me sens toujours impliqué(e) dans la journée de mon enfant !&quot;
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Program; 