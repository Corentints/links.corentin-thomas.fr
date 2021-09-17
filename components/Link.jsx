import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function Link({ Icon, text, alt, href }) {
  return (
    <a
      className="flex items-center bg-white justify-between w-full p-4 text-xl rounded-lg cursor-pointer hover:backdrop-opacity-80 transition duration-300 ease-in-out transform  hover:-translate-y-0.5 hover:scale-102"
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <div className="inline-flex">
        <Icon />
        <span className="ml-3"> <span className="sr-only">{alt}: </span> {text}</span>
      </div>

      <ExternalLinkIcon className="w-6 h-6" />
    </a>
  );
}
