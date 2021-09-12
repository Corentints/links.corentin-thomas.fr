import { useTranslation } from "react-i18next";

export default function ContactForm({ setOpen }) {
  const { t } = useTranslation();
  return (
    <div className="px-6 py-10 sm:px-10 lg:col-span-2">
      <h3 className="text-lg font-medium text-warm-gray-900">
        {t("contactForm.contactme")}
      </h3>
      <form
        method="POST"
        className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        data-netlify="true"
        action="/?success"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-warm-gray-900"
          >
            {t("contactForm.firstname")}
          </label>
          <div className="mt-1">
            <input
              required
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-teal-500 border-warm-gray-300"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-warm-gray-900"
          >
            {t("contactForm.lastname")}
          </label>
          <div className="mt-1">
            <input
              required
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-teal-500 border-warm-gray-300"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-warm-gray-900"
          >
            {t("contactForm.email")}
          </label>
          <div className="mt-1">
            <input
              required
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-teal-500 border-warm-gray-300"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-warm-gray-900"
            >
              {t("contactForm.phone")}
            </label>
            <span id="phone-optional" className="text-sm text-warm-gray-500">
              {t("contactForm.optional")}
            </span>
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-teal-500 border-warm-gray-300"
              aria-describedby="phone-optional"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-warm-gray-900"
          >
            {t("contactForm.subject")}
          </label>
          <div className="mt-1">
            <input
              required
              type="text"
              name="subject"
              id="subject"
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-teal-500 border-warm-gray-300"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-warm-gray-900"
            >
              {t("contactForm.message")}
            </label>
          </div>
          <div className="mt-1">
            <textarea
              required
              id="message"
              name="message"
              rows="4"
              className="block w-full my-0 h-[131px] px-4 py-3 border rounded-md shadow-sm text-warm-gray-900 focus:ring-indigo-500 focus:border-teal-500 border-warm-gray-300"
              aria-describedby="message-max"
            ></textarea>
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button
            type="submit"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            {t("contactForm.submit")}
          </button>
        </div>
      </form>
    </div>
  );
}
