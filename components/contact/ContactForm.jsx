import { useTranslation } from "react-i18next";
import { useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm({ setOpen, setMailSent }) {
  const { t } = useTranslation();
  const [state, setState] = useState({});


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        setOpen(false);
        setMailSent(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-6 py-10 sm:px-10 lg:col-span-2">
      <h3 className="text-lg font-medium text-warm-gray-900">
        {t("contactForm.contactme")}
      </h3>
      <form
        name="contact"
        action="/"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        onSubmit={handleSubmit}
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
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-gray-900 focus:border-gray-900 border-warm-gray-300"
              onChange={handleChange}
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
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-gray-900 focus:border-gray-900 border-warm-gray-300"
              onChange={handleChange}
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
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-gray-900 focus:border-gray-900 border-warm-gray-300"
              onChange={handleChange}
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
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-gray-900 focus:border-gray-900 border-warm-gray-300"
              aria-describedby="phone-optional"
              onChange={handleChange}
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
              className="block w-full px-4 py-3 rounded-md shadow-sm text-warm-gray-900 focus:ring-gray-900 focus:border-gray-900 border-warm-gray-300"
              onChange={handleChange}
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
              className="block w-full my-0 h-[131px] px-4 py-3 border rounded-md shadow-sm text-warm-gray-900 focus:ring-gray-900 focus:border-gray-900 border-warm-gray-300"
              aria-describedby="message-max"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button
            type="submit"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:text-sm"
          >
            {t("contactForm.submit")}
          </button>
        </div>
      </form>
    </div>
  );
}
