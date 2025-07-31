"use client";

import { FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className=" bg-gradient-to-br pt-18 px-4 from-indigo-50 via-blue-50 to-pink-50 relative overflow-hidden"
    >
      {/* Animated pastel background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-indigo-200 rounded-full opacity-30 blur-2xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-200 rounded-full opacity-30 blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-blue-200 rounded-full opacity-30 blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl animate-blob animation-delay-1000"></div>
      </div>

      {/* Map/Location Card */}
      <div className="relative z-10 max-w-5xl mx-auto mb-14">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-4 py-8 md:p-10 shadow-2xl border-2 border-white/60 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center mb-4 shadow-lg">
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-indigo-700">
            {t("contact.address_title")}
          </h3>
          <div className="text-lg font-semibold text-slate-800 mb-1">
            {t("contact.street")}
          </div>
          <div className="text-base text-slate-600 mb-2">
            {t("contact.city")}
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
              title={t("contact.map_title")}
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
          {t("contact.online_registration")}
        </a>
      </div>
    </section>
  );
};

export default Contact;
