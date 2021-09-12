import { ArrowLeftIcon, TranslateIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../lang/i18n";

export default function BannerHeader() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language === "fr" ? "English" : "Français");

  function changeLanguage() {
    const lang = i18n.language;
    if (lang === "en") {
      i18n.changeLanguage("fr");
      setLanguage("English");
    } else {
      i18n.changeLanguage("en");
      setLanguage("Français");
    }
  }

  return (
    <div className="flex items-center justify-between h-10 px-4 text-sm font-medium text-white bg-indigo-600 sm:px-6 lg:px-8">
      <a href="https://corentin-thomas.fr" target="_blank" className="flex items-center" rel="noreferrer">
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        {t("header.visitMyportfolio")}
      </a>
      <div className="flex items-center space-x-4">
        <button
        className="inline-flex items-center"
          onClick={() => {
            changeLanguage();
          }}
        >
            <TranslateIcon className="w-5 h-5 mr-2" />
            {language}
        </button>
      </div>
    </div>
  );
}
