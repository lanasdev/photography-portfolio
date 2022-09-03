import { InstagramLogo, TwitterLogo, Envelope } from "phosphor-react";

const Footer = ({ social }) => {
  return (
    <footer>
      <div className="px-8 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>&copy; {new Date().getFullYear() || "2022"} - Bart Photography</div>
        <div className="flex space-x-6 md:space-x-8 py-4 md:py-0">
          {social.instagram && (<a href={social?.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={24} /></a>)}
          {/* {console.log("IG", social?.instagram)} */}
          {social.twitter && (<a href={social?.twitter} target="_blank" rel="noopener noreferrer"><TwitterLogo size={24} /></a>)}
          {social.email && (<a href={`mailto:${social?.email}`}><Envelope size={24} /></a>)}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
