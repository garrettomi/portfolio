import reactLogo from '../../assets/react-icon.png';
import pythonLogo from '../../assets/python-logo.png';
import djangoLogo from '../../assets/django-logo.png';
import nodejsLogo from '../../assets/nodejs-logo.png';

const TechStack = () => {
    return (
        <section className="section-features">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Tech Stack
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <img src={reactLogo} alt='React Logo' className="feature-box__icon" />
                {/* <h3 className="heading-tertiary u-margin-bottom-small">React</h3> */}
                {/* <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p> */}
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
              <img src={pythonLogo} alt='Python Logo' className="feature-box__icon" />
                {/* <h3 className="heading-tertiary u-margin-bottom-small">Python</h3> */}
                {/* <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p> */}
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
              <img src={djangoLogo} alt='Django Logo' className="feature-box__icon" />
                {/* <h3 className="heading-tertiary u-margin-bottom-small">Django</h3> */}
                {/* <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p> */}
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
              <img src={nodejsLogo} alt='NodeJS Logo' className="feature-box__icon" />
                {/* <h3 className="heading-tertiary u-margin-bottom-small">Node.js</h3> */}
                {/* <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p> */}
              </div>
            </div>
          </div>
        </section>
    )
}

export default TechStack;