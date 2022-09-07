import Link from "next/link";
import { InstagramLogo, TwitterLogo, GithubLogo, Envelope } from "phosphor-react";

const Footer = ({ social }) => {
  return (
    <footer>
      <div className="px-8 py-8 flex flex-col md:flex-row justify-between items-center">
        <Link href={'/about'}>
          <a>
            &copy; {new Date().getFullYear() || "2022"} - <span className="hover:underline">Lanas.dev</span>
          </a>
        </Link>
        <div className="flex space-x-6 md:space-x-8 py-4 md:py-0">
          {social.instagram && (<a href={social?.instagram} target="_blank" rel="noopener noreferrer" className="hover:rotate-12 ease-in-out duration-200" aria-label="Instagram Button" ><InstagramLogo size={24} /></a>)}
          {social.twitter && (<a href={social?.twitter} target="_blank" rel="noopener noreferrer" className="hover:rotate-12 ease-in-out duration-200" aria-label="Twitter Button" ><TwitterLogo size={24} /></a>)}
          {social.github && (<a href={social?.github} target="_blank" rel="noopener noreferrer" className="hover:rotate-12 ease-in-out duration-200" aria-label="Github Button" ><GithubLogo size={24} /></a>)}
          {social.email && (<a href={`mailto:${social?.email}`} className="hover:rotate-12 ease-in-out duration-200" aria-label="Email Button" ><Envelope size={24} /></a>)}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
