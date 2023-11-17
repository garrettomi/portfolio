import BackgroundVideo from './BackgroundVideo/BackgroundVideo';

import video from '../../../assets/video.mp4';
import videoWebm from '../../../assets/video.webm';
import discoverNikkei from '../../../assets/discover_nikkei.png';

const Contributions = () => {
    return (
        <section className="section-stories" id="contributions">
            <BackgroundVideo video={video} videoWebm={videoWebm} />
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Contributing with
              </h2>
            </div>
            <div className="row">
              <div className="story">
            <a href="https://discovernikkei.org/en/" className="nikkei-link" target="_blank">
                <figure className="story__shape">
                  <img src={discoverNikkei} alt="Discover Nikkei Logo" className="story__img" />
                  <figcaption className="story__caption">Discover Nikkei</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">Discover Nikkei - Software Engineer - Python, Django</h3>
                  <p>
                    As a yonsei, it's been an amazing honor to write code helping to preserve the largest digital archive of Nikkei history and stories.
                    Coolest point so far: in the midst of optimizing data transmission for a veterans search filter, I found actual family members who served in the 442 stored in the database. 
                  </p>
                </div>
              </a>
              </div>
              <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">Back to the top</a>
            </div>
            </div>
            {/* <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img src={discoverNikkei} alt="Person on a tour" className="story__img" />
                  <figcaption className="story__caption">Jack Wilson</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn-text">Read all stories →</a>
            </div> */}
          </section>
    )
}

export default Contributions;