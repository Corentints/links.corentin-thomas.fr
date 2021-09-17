import { MailIcon } from "@heroicons/react/solid";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { useTranslation } from "react-i18next";

export default function ContactBanner({ setMailSent }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-end flex-1 min-w-0 py-4 space-x-6">
          <div className="flex-1 block min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
            {t('contactBanner.title')}
            </h1>
          </div>
          <div className="flex flex-row space-x-4 justify-stretch">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <MailIcon
                className="w-5 h-5 mr-2 -ml-1 text-gray-400"
                aria-hidden="true"
              />
              <span>{t('contactBanner.contactme')}</span>
            </button>
            <ContactModal open={open} setOpen={setOpen} setMailSent={setMailSent} />
          </div>
        </div>
      </div>
    </div>
  );
}
