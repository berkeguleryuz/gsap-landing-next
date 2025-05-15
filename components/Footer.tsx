import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaXTwitter /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://twitch", icon: <FaTwitch /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          Bloomy &copy;. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white">
              {link.icon}
            </Link>
          ))}
        </div>

        <Link
          href={"#privacy-policy"}
          className="text-center text-sm hover:underline md:text-right">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
