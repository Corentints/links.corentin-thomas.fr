import { useRef } from "react";
import { ClipboardIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";

export default function ClipboardLink({ Icon, text, alt }) {
  const clipBoardText = useRef(null);
  const { t } = useTranslation();

  function copyLink() {
    navigator.clipboard.writeText(clipBoardText.current.innerText);
    clipBoardText.current.innerText = t('copied');
    window.setTimeout(function () {
      clipBoardText.current.innerText = text;
    }, 2000);
  }

  return (
    <button type="button"
      className="flex items-center bg-white justify-between w-full p-4 text-xl transition duration-300 ease-in-out transform rounded-lg cursor-pointer hover:-translate-y-0.5 hover:scale-102"
      onClick={copyLink}
    >
      <div className="flex">
        <Icon />
        <span ref={clipBoardText} className="ml-3"><span className="sr-only">{alt}: </span> {text}</span>
      </div>
      <ClipboardIcon className="w-6 h-6" />
    </button>
  );
}
