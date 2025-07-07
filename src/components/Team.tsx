"use client";

import { motion } from "framer-motion";
import { FaBaby, FaChild, FaUserFriends, FaGraduationCap, FaStar } from "react-icons/fa";

const groups = [
  {
    title: "Pouponnière (0 à 18 mois)",
    description: "Nos trois éducatrices spécialisées dans les soins et le développement des tout-petits :",
    members: [
      { name: "Simranjit", detail: "responsable des poupons de 0 à 8 mois" },
      { name: "Kristin", detail: "responsable des poupons de 9 à 12 mois" },
      { name: "Carmen", detail: "responsable des poupons de 12 à 18 mois" },
    ],
    color: "from-pink-200 to-rose-100",
    icon: <FaBaby className="text-pink-400 text-3xl md:text-4xl" />
  },
  {
    title: "Trotteurs (18 à 36 mois)",
    description: "Un accompagnement attentif et stimulant à travers trois étapes clés du développement moteur et langagier :",
    members: [
      { name: "Daphney", detail: "groupe des 18 à 24 mois" },
      { name: "Souad", detail: "groupe des 24 à 30 mois" },
      { name: "Li", detail: "groupe des 30 à 36 mois" },
    ],
    color: "from-blue-200 to-indigo-100",
    icon: <FaChild className="text-blue-400 text-3xl md:text-4xl" />
  },
  {
    title: "Bambins (3 à 4 ans)",
    description: "Trois éducatrices dynamiques accompagnent les enfants dans cette période d’exploration, d’autonomie et de socialisation :",
    members: [
      { name: "Fiona" },
      { name: "Stéphanie" },
      { name: "Drissia" },
    ],
    color: "from-green-200 to-emerald-100",
    icon: <FaUserFriends className="text-green-400 text-3xl md:text-4xl" />
  },
  {
    title: "Préscolaire (4 à 5 ans)",
    description: "Deux éducatrices guident les enfants vers une préparation harmonieuse à l’école, en mettant l’accent sur les compétences cognitives, émotionnelles et sociales :",
    members: [
      { name: "Popi" },
      { name: "Bassma" },
    ],
    color: "from-purple-200 to-pink-100",
    icon: <FaGraduationCap className="text-purple-400 text-3xl md:text-4xl" />
  },
];

export default function Team() {
  return (
    <section id="equipe" className="relative py-32 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
      {/* Decorative confetti/sparkle elements (fixed positions for hydration safety) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fixed confetti positions to avoid hydration errors */}
        {[
          { top: '8%', left: '12%', w: 8, h: 8, color: 'bg-pink-200', delay: '' },
          { top: '18%', left: '80%', w: 6, h: 6, color: 'bg-blue-200', delay: 'animation-delay-1000' },
          { top: '60%', left: '20%', w: 7, h: 7, color: 'bg-yellow-200', delay: 'animation-delay-2000' },
          { top: '75%', left: '65%', w: 5, h: 5, color: 'bg-green-200', delay: '' },
          { top: '40%', left: '50%', w: 7, h: 7, color: 'bg-purple-200', delay: '' },
          { top: '90%', left: '10%', w: 6, h: 6, color: 'bg-pink-100', delay: 'animation-delay-1000' },
          { top: '30%', left: '70%', w: 8, h: 8, color: 'bg-blue-100', delay: '' },
          { top: '55%', left: '85%', w: 5, h: 5, color: 'bg-yellow-100', delay: 'animation-delay-2000' },
        ].map((star, i) => (
          <span
            key={i}
            className={`absolute rounded-full shadow-lg animate-pulse-slow ${star.color} ${star.delay}`}
            style={{
              width: `${star.w}px`,
              height: `${star.h}px`,
              top: star.top,
              left: star.left,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      {/* Section Title */}
      <div className="relative z-10 flex flex-col items-center mb-20">
        <div className="flex items-center gap-4 mb-4">
          <FaStar className="text-yellow-300 text-4xl animate-twinkle" />
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-200 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-glow tracking-tight">
            Rencontrez Nos Étoiles
          </h2>
        </div>
        <div className="w-24 h-2 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 blur-sm"></div>
      </div>
      {/* Horizontal Showcase Carousel */}
      <div className="relative z-10 overflow-x-auto pb-8">
        <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-12">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-center justify-start rounded-3xl bg-white/70 backdrop-blur-2xl shadow-xl border-0 overflow-visible min-h-[360px] group hover:shadow-lg hover:-translate-y-2 transition-all duration-300`}
              style={{ minHeight: '360px', boxShadow: `0 8px 32px 0 ${group.color.includes('pink') ? 'rgba(236, 72, 153, 0.15)' : group.color.includes('blue') ? 'rgba(59, 130, 246, 0.15)' : group.color.includes('green') ? 'rgba(34,197,94,0.15)' : 'rgba(168,85,247,0.15)'}` }}
            >
              {/* Icon inside card, top center, with glow and float */}
              <div className="flex justify-center w-full -mt-12 mb-2">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-white/80 bg-gradient-to-br ${group.color} text-white text-4xl animate-float-slow`} style={{ boxShadow: `0 0 32px 0 ${group.color.includes('pink') ? '#f9a8d4' : group.color.includes('blue') ? '#93c5fd' : group.color.includes('green') ? '#bbf7d0' : '#ddd6fe'}` }}>
                  {group.icon}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center w-full pt-2 pb-8 px-8 text-center relative z-10">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-800 drop-shadow-lg tracking-tight" style={{ fontFamily: 'inherit, ui-rounded, Arial, sans-serif' }}>
                  {group.title}
                </h3>
                <div className={`w-16 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r ${group.color}`}></div>
                <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto leading-relaxed" style={{ fontWeight: 500 }}>{group.description}</p>
                <ul className="flex flex-wrap justify-center gap-4 w-full max-w-xs mx-auto mb-2">
                  {group.members.map((member) => (
                    <li key={member.name} className="flex items-center gap-2">
                      <span className="inline-block px-6 py-2 rounded-full bg-white/90 shadow-md font-bold text-lg text-slate-800 border border-slate-200 group-hover:scale-105 transition-transform duration-200" style={{ letterSpacing: '0.01em' }}>
                        {member.name}
                      </span>
                      {"detail" in member && member.detail && (
                        <span className="text-base text-slate-500 font-normal">: {member.detail}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 