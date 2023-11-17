import logoGreenSmall from '../../assets/logo-green-small-1x.png'
import logoGreenSmall2 from '../../assets/logo-green-small-2x.png'
import logoGreen from '../../assets/logo-green-1x.png'
import logoGreen2 from '../../assets/logo-green-2x.png'


const Footer = () => {

    return (
        <footer className="footer">
          <div className="footer__logo-box">
            <picture className="footer__logo">
              <source srcSet={`${logoGreenSmall}, ${logoGreenSmall2}`} media="(max-width: 37.5em)" />
              <img srcSet={`${logoGreen} 1x, ${logoGreen2} 2x"`} alt="Full logo" src={`${logoGreen2}`} />
            </picture>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                  <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                  <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                  <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                  <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Some text
              </p>
            </div>
          </div>
        </footer>
      );
    }

export default Footer;
  