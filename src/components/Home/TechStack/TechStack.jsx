import Badges from './Badges/Badges';

import reactLogo from '../../../assets/react-icon.png';
import pythonLogo from '../../../assets/python-logo.png';
import djangoLogo from '../../../assets/django-logo.png';
import nodejsLogo from '../../../assets/nodejs-logo.png';

const TechStack = () => {
    const allBadges = [
      { logo: reactLogo, altText: 'React Logo' },
      { logo: pythonLogo, altText: 'Python Logo' },
      { logo: djangoLogo, altText: 'Django Logo' },
      { logo: nodejsLogo, altText: 'NodeJS Logo' },
    ]

    return (
        <section className="section-features">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Tech Stack
            </h2>
          </div>
          <div className="row">
            {allBadges.map((badge, index) => (
              <div className='col-1-of-4' key={index}>
                <Badges logo={badge.logo} altText={badge.altText} />
                </div>
            ))}
          </div>
        </section>
    )
}

export default TechStack;