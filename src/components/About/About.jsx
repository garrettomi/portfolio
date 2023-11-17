import misterGarrett from '../../assets/mister-garrett.jpeg';
import misterGarrettLarge from '../../assets/mister-garrett-large.jpg';
import wedding from '../../assets/wedding.jpeg';
import weddingLarge from '../../assets/wedding-large.jpg';
import treffin from '../../assets/treffin.png';
import treffinLarge from '../../assets/treffin-large.png';

const About = () => {
    return (
        <section className="section-about" id="about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                About Me
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">Who am I?</h3>
                <p className="paragraph">
                  Hi! My name's Garrett and I'm a Software Engineer from the San Francisco Bay Area living in Tokyo, Japan with my wife and newborn son.
                  As a 4th generation Japanese American, I moved to Japan in order to get closer to my ancestral heritage and have now lived here for close to 5 years.
                  In my rare free time apart from programming and parenting, I enjoy cycling around the Tokyo suburbs, drinking good coffee and shopping for denim.
                  <br/>
                  Thanks for visiting my page!
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">From educator to engineer</h3>
                <p className="paragraph">
                  It was during the pandemic while I was still teaching at an international school where I first discovered my passion not just for coding, but for identifying issues and problem-solving through tech.
                  It began with self-studying basic HTML, CSS and Javascript to build static webpages for optimizing daily life occurrences and use cases which transcended into a life-long commitment towards the world of software development.

                </p>
                {/* <a href="#" className="btn-text">Learn more →</a> */}
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                <img srcSet={`${misterGarrett} 300w, ${misterGarrettLarge} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="composition__photo composition__photo--p1" />
                <img srcSet={`${wedding} 300w, ${weddingLarge} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="composition__photo composition__photo--p2" />
                <img srcSet={`${treffin} 300w, ${treffinLarge} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 3" className="composition__photo composition__photo--p3" />
                </div>
              </div>
            </div>
          </section>
    )
}

export default About;