import Contribution from './Contribution/Contribution';
import { Sticky, StickyContainer } from 'react-sticky';

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
              {/* <StickyContainer>
              <div className="u-center-text u-margin-top-huge">
                <Sticky>
                {({style}) => (
                  <a href="#" className="btn btn--green" style={style}>Back to the top</a>
                )}
                </Sticky>
            </div>
            </StickyContainer> */}
            </div>
          </section>
    )
}

export default Contributions;