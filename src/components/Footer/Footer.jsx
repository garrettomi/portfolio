import FooterNavigation from "./FooterNavigation/FooterNavigation";
import FooterContact from "./FooterContact/FooterContact";

import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/linkedin.png'


const Footer = () => {
  const navigationItems = [
    {
      src: githubLogo,
      href: "https://www.linkedin.com/in/garrett-omi/",
      children: "LinkedIn"
    },
    { 
      src: linkedinLogo,
      href: "https://github.com/garrettomi",
      children: "Github"
    }
  ]

    return (
        <footer className="footer">
          {/* <div className="footer__logo-box">
            <picture className="footer__logo">
              <source srcSet={`${logoGreenSmall}, ${logoGreenSmall2}`} media="(max-width: 37.5em)" />
              <img srcSet={`${logoGreen} 1x, ${logoGreen2} 2x"`} alt="Full logo" src={`${logoGreen2}`} />
            </picture>
          </div> */}
          <div className="row">
            <div className="col-1-of-2">
              <FooterNavigation items={navigationItems} />
            </div>
            <div className="col-1-of-2">
              <FooterContact text="Email: omigarrett@gmail.com" />
            </div>
          </div>
        </footer>
      );
    }

export default Footer;
  