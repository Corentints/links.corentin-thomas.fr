import Head from "next/head";
import Header from "../components/Header";
import ClipboardLink from "../components/ClipboardLink";
import ContactBanner from "../components/contact/ContactBanner";
import DevtoIcon from "../components/icons/DevtoIcon";
import DiscordIcon from "../components/icons/DiscordIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import Link from "../components/Link";
import { useState } from "react";
import SuccessContactNotification from "../components/contact/SuccessContactNotification";
import MaltIcon from "../components/icons/MaltIcon";
import Seo from "../components/Seo";

export default function IndexPage() {
  const [mailSent, setMailSent] = useState(false);

  const links = [
    {
      text: "Corentin THOMAS",
      alt: "Linkedin",
      Icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/corentin-thomas/",
    },
    {
      text: "Corentin Thomas",
      alt: "Malt",
      Icon: MaltIcon,
      href: "https://www.malt.fr/profile/corentinthomas",
    },
    {
      text: "CorentinTS",
      alt: "Github",
      Icon: GithubIcon,
      href: "https://github.com/CorentinTS",
    },
    {
      text: "@CorentinTS",
      alt: "Dev.to",
      Icon: DevtoIcon,
      href: "https://dev.to/corentints",
    },
    {
      text: "@CorentinTS",
      alt: "Twitter",
      Icon: TwitterIcon,
      href: "https://twitter.com/intent/user?screen_name=CorentinTS",
    },
  ];

  const clipBoardLinks = [
    {
      text: "Corentin#0001",
      alt: "Discord",
      Icon: DiscordIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <Head>
        <title>Corentin THOMAS | Links</title>
        <link rel="icon" href="/favicon.ico" />
        <Seo />
      </Head>
      {mailSent && <SuccessContactNotification setMailSent={setMailSent} />}
      <Header />
      <ContactBanner setMailSent={setMailSent} />
      <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="py-6 space-y-4">
          {links.map((link) => (<Link key={link.alt} {...link} />))}
          {clipBoardLinks.map((link) => (<ClipboardLink key={link.alt} {...link} />))}
        </div>
      </div>
    </div>
  );
}
