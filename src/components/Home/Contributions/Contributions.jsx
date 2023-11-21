import Contribution from './Contribution/Contribution';

import discoverNikkei from '../../../assets/discover_nikkei.png';

const Contributions = () => {
    return (
        <section className="section-contributions" id="contributions">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Contributing with
              </h2>
            </div>
            <div className="row">
              <div className="organization">
              <Contribution href="https://discovernikkei.org/en/" alt="Discover Nikkei Logo" src={discoverNikkei} main="Discover Nikkei" sub="Discover Nikkei - Software Engineer - Python, Django"/>
              </div>
            </div>
          </section>
    )
}

export default Contributions;