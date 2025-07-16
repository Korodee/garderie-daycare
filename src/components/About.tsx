"use client";

import { motion } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaUsers,
  FaGraduationCap,
  FaBaby,
  FaClock,
  FaShieldAlt,
  FaLeaf,
  FaPaintBrush,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const About = () => {
  const stats = [
    {
      icon: <FaClock className="text-4xl text-blue-500" />,
      number: "35+",
      label: "Années d'expérience",
      description: "Depuis notre fondation en 1987",
    },
    {
      icon: <FaUsers className="text-4xl text-green-500" />,
      number: "80",
      label: "Enfants accueillis",
      description: "15 poupons + 65 enfants",
    },
    {
      icon: <GiTeacher className="text-4xl text-purple-500" />,
      number: "11",
      label: "Éducatrices qualifiées",
      description: "Équipe stable et expérimentée",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      number: "100%",
      label: "Sécurisé",
      description: "Environnement protégé",
    },
  ];

  const values = [
    {
      icon: <FaGraduationCap className="text-2xl text-white" />,
      title: "Éducation",
      description:
        "Excellence éducative reconnue par le Ministère de la famille",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <FaHeart className="text-2xl text-white" />,
      title: "Compassion",
      description: "Accompagnement bienveillant et empathique de chaque enfant",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaHeart className="text-2xl text-white" />,
      title: "Amour",
      description:
        "Chaque enfant est accueilli avec affection et bienveillance",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <FaLeaf className="text-2xl text-white" />,
      title: "Respect",
      description: "Respect de l'individualité et du rythme de chaque enfant",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaStar className="text-2xl text-white" />,
      title: "Autonomie",
      description: "Développement de l'indépendance et de la confiance en soi",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaPaintBrush className="text-2xl text-white" />,
      title: "Créativité",
      description: "Encouragement de l'expression artistique et imaginative",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const timeline = [
    {
      year: "1987",
      title: "Fondation",
      description:
        "Création de Garderie Aimée Inc. avec une vision bilingue et une approche centrée sur le développement global de l'enfant",
    },
    {
      year: "1995",
      title: "Reconnaissance MFA",
      description:
        "Obtention de la reconnaissance officielle du Ministère de la famille avec qualité éducative reconnue",
    },
    {
      year: "2010",
      title: "Expansion",
      description:
        "Agrandissement des installations pour accueillir 80 enfants (15 poupons + 65 enfants)",
    },
    {
      year: "2025",
      title: "Rénovation Complète",
      description:
        "Rénovation intérieure complète des espaces éducatifs pour offrir un environnement moderne et stimulant",
    },
  ];

  return (
    <section
      id="presentation"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaBaby className="text-lg" />
            <span>Depuis 1987</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Notre Histoire
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Plus de trois décennies d&apos;excellence éducative, de passion et
            d&apos;engagement envers le développement harmonieux de chaque
            enfant.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-24"
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <FaHeart className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold">Notre Mission</h3>
              </div>
              <p className="text-xl leading-relaxed">
                Offrir un environnement sécuritaire, stimulant et bienveillant
                où chaque enfant peut grandir, apprendre, s&apos;épanouir à son
                propre rythme et développer chaque jour davantage son autonomie.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <FaStar className="text-2xl" />
                </div>
                <h3 className="text-3xl font-bold">Notre Vision</h3>
              </div>
              <p className="text-xl leading-relaxed">
                Faire avec excellence afin de former des citoyens autonomes, compatissants, curieux et prêts pour l’avenir.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Nos Valeurs Fondamentales
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et interactions
              quotidiennes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          {/* Playful floating shapes */}
          <div className="absolute -top-16 left-1/4 w-40 h-40 bg-pink-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-yellow-100 rounded-full filter blur-2xl opacity-40 z-0 animate-blob animation-delay-4000"></div>

          <div className="text-center mb-16 relative z-10">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Notre Parcours
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Plus de 35 ans d&apos;évolution et d&apos;engagement envers
              l&apos;excellence éducative
            </p>
          </div>

          <div className="relative z-10">
            {/* Rainbow timeline line */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-pink-300 via-yellow-200 to-blue-300"></div>
            <div className="block sm:hidden absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-yellow-200 to-blue-300"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => {
                // Playful pastel backgrounds and icons for each milestone
                const pastelBg = [
                  "bg-pink-50",
                  "bg-blue-50",
                  "bg-yellow-50",
                  "bg-green-50",
                ];
                const accentBar = [
                  "bg-pink-300",
                  "bg-blue-300",
                  "bg-yellow-300",
                  "bg-green-300",
                ];
                const icons = [
                  "🏫", // Fondation
                  "🏅", // Reconnaissance
                  "🧸", // Expansion
                  "🎨", // Rénovation
                ];
                const bg = pastelBg[index % pastelBg.length];
                const bar = accentBar[index % accentBar.length];
                const icon = icons[index % icons.length];
                const dotColor = `bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300`;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex flex-col sm:flex-row items-center sm:items-stretch ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-full sm:w-1/2 px-0 sm:${
                        index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                      } mb-6 sm:mb-0`}
                    >
                      <div
                        className={`relative rounded-3xl p-6 sm:p-8 shadow-xl border-0 ${bg} transition-all duration-300 group w-full max-w-md mx-auto sm:max-w-none`}
                      >
                        {/* Accent bar */}
                        <div
                          className={`absolute top-0 ${
                            index % 2 === 0 ? "left-0" : "right-0"
                          } h-full w-1 sm:w-2 ${bar} rounded-3xl`}
                        ></div>
                        {/* Icon and year stacked and centered */}
                        <div className="flex flex-col items-center justify-center mb-3">
                          <span className="text-3xl mb-1">{icon}</span>
                          <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-2 text-center sm:text-left">
                          {item.title}
                        </h4>
                        <p className="text-lg text-slate-700 font-medium text-center sm:text-left">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Playful timeline dot */}
                    <div className="relative z-10 mb-6 sm:mb-0">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${dotColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center text-2xl animate-pulse mx-auto`}
                      >
                        {icon}
                      </div>
                    </div>

                    <div className="hidden sm:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Regulatory Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-3xl p-4 py-8 md:py-12 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 opacity-10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-opacity-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <FaShieldAlt className="text-3xl" />
                </div>
                <h3 className="text-4xl font-bold">Conformité Réglementaire</h3>
              </div>

              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
                Notre engagement envers l&apos;excellence éducative
                s&apos;accompagne d&apos;une conformité rigoureuse aux normes
                gouvernementales.
              </p>

              <div className="grid md:grid-cols-3 gap-8 items-stretch min-h-[220px]">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col justify-center h-full text-center">
                  <h4 className="text-2xl font-bold mb-3">Cadre Légal</h4>
                  <ul className="mx-auto text-left max-w-md">
                    <li>
                      • Loi sur les services de garde éducatifs à l&apos;enfance
                    </li>
                    <li>
                      • Règlement sur les services de garde éducatifs à
                      l&apos;enfance
                    </li>
                    <li>• Règlement sur la contribution réduite</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col justify-center h-full text-center">
                  <h4 className="text-2xl font-bold mb-3">
                    Reconnaissance MFA
                  </h4>
                  <p className="text-center">
                    Qualité éducative reconnue par le Ministère de la famille
                    depuis 1995
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex flex-col justify-center h-full text-center">
                  <h4 className="text-2xl font-bold mb-3">Comité de Parents</h4>
                  <p className="text-center">
                    Conformément à l&apos;article 31, comité de 5 parents élus.
                    Assemblée annuelle avant le 15 octobre.
                    <br />
                    Un parent employé ou propriétaire ne peut pas en faire
                    partie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-4 py-8 md:py-12 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-opacity-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <FaGraduationCap className="text-3xl" />
                </div>
                <h3 className="text-4xl font-bold">
                  Équipe de Professionnels Spécialisés
                </h3>
              </div>

              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
                Afin d&apos;assurer un développement complet et harmonieux, la
                garderie collabore avec une équipe multidisciplinaire de
                professionnels qui interviennent au besoin.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Psychoéducatrice",
                    desc: "Soutien au développement socio-affectif",
                  },
                  {
                    name: "Ergothérapeute",
                    desc: "Développement des habiletés motrices",
                  },
                  {
                    name: "Orthophoniste",
                    desc: "Développement du langage et communication",
                  },
                  {
                    name: "Physiothérapeute",
                    desc: "Développement moteur et postural",
                  },
                ].map((specialist, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow"
                  >
                    <div className="text-2xl font-bold mb-2 text-slate-900">
                      {specialist.name}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="block w-8 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mb-2"></span>
                      <div className="text-gray-800 text-base font-medium">
                        {specialist.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
