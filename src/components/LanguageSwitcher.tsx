"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FaGlobe } from "react-icons/fa";

interface LanguageSwitcherProps {
  scrolled: boolean;
  isGalleryPage: boolean;
}

const LanguageSwitcher = ({
  scrolled,
  isGalleryPage,
}: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 font-medium text-sm cursor-pointer ${
        scrolled || isGalleryPage
          ? "bg-gray-100 hover:bg-gray-200"
          : "bg-white/10 hover:bg-white/20"
      }`}
      aria-label={`Switch to ${language === "fr" ? "English" : "Français"}`}
    >
      <FaGlobe
        className={`text-lg ${
          scrolled || isGalleryPage ? "text-black" : "text-white"
        }`}
      />
      <span
        className={`${scrolled || isGalleryPage ? "text-black" : "text-white"}`}
      >
        {language === "fr" ? "EN" : "FR"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
