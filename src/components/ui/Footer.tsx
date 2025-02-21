import { copyright, socialList } from "@/data";
import React from "react";

const Socials = ({ Icon, link }: { Icon: React.ElementType; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-100 hover:text-btnPrimary transition-all duration-300"
      aria-label="Social Link"
    >
      <Icon size={20} />
    </a>
  );
};

const Footer = () => {
  return (
    <footer id="socials" className="py-4">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <span className="text-sm text-gray-100 text-center dark:text-gray-100">
          © {copyright}
        </span>
        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          {socialList.map(({ id, Icon, link }) => (
            <Socials key={id} Icon={Icon} link={link} />
          ))}
        </div>
      </div>
      <hr className="mt-4 border-gray-100 sm:mx-auto dark:border-white/[0.2]" />
    </footer>
  );
};

export default Footer;
