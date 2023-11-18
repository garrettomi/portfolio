import BackgroundVideo from './BackgroundVideo/BackgroundVideo';
import Contribution from './Contribution/Contribution';

import video from '../../../assets/video.mp4';
import videoWebm from '../../../assets/video.webm';
import discoverNikkei from '../../../assets/discover_nikkei.png';

const Contributions = () => {
    return (
        <section className="section-contributions" id="contributions">
            <BackgroundVideo video={video} videoWebm={videoWebm} />
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Contributing with
              </h2>
            </div>
            <div className="row">
              <div className="organization">
              <Contribution href="https://discovernikkei.org/en/" alt="Discover Nikkei Logo" src={discoverNikkei} main="Discover Nikkei" sub="Discover Nikkei - Software Engineer - Python, Django"/>
              </div>
              <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">Back to the top</a>
            </div>
            </div>
          </section>
    )
}

export default Contributions;