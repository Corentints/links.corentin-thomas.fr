import Head from "next/head";
import BannerHeader from "../components/BannerHeader";
import ClipboardLink from "../components/ClipboardLink";
import ContactBanner from "../components/ContactBanner";
import DevtoIcon from "../components/icons/DevtoIcon";
import DiscordIcon from "../components/icons/DiscordIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import Link from "../components/Link";
import { useState, useEffect } from "react";
import SuccessContactNotification from "../components/contact/SuccessContactNotification";
import MaltIcon from "../components/icons/MaltIcon";

export default function IndexPage() {
  const [mailSent, setMailSent] = useState(false);

  const links = [
    {
      backgroundColor: "#FFFFFF",
      color: "#0A66C2",
      text: "Corentin THOMAS",
      alt: "Linkedin",
      Icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/corentin-thomas/",
    },
    {
      backgroundColor: "#FF5D57",
      color: "#FFFFFF",
      text: "Corentin Thomas",
      alt: "Malt",
      Icon: MaltIcon,
      href: "https://www.malt.fr/profile/corentinthomas",
    },
    {
      backgroundColor: "#353535",
      color: "#FFFFFF",
      text: "CorentinTS",
      alt: "Github",
      Icon: GithubIcon,
      href: "https://github.com/CorentinTS",
    },
    {
      backgroundColor: "#353535",
      color: "#FFFFFF",
      text: "@CorentinTS",
      alt: "Dev.to",
      Icon: DevtoIcon,
      href: "https://dev.to/corentints",
    },
    {
      backgroundColor: "#1D9BF0",
      color: "#FFFFFF",
      text: "@CorentinTS",
      alt: "Twitter",
      Icon: TwitterIcon,
      href: "https://twitter.com/intent/user?screen_name=CorentinTS",
    },
  ];

  const clipBoardLinks = [
    {
      backgroundColor: "#5865F2",
      color: "#FFFFFF",
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
      </Head>
      {mailSent && <SuccessContactNotification setMailSent={setMailSent} />}
      <BannerHeader />
      <ContactBanner setMailSent={setMailSent} />
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="py-6 space-y-4 md:py-12 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
          {links.map((link) => (<Link key={link.alt} {...link} />))}
          {clipBoardLinks.map((link) => (<ClipboardLink key={link.alt} {...link} />))}
        </div>
      </div>
    </div>
  );
}
