import AboutText from "./AboutText/AboutText";
import AboutComposition from "./AboutComposition/AboutComposition";

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
                <AboutText text="Hi! My name's Garrett and I'm a Software Engineer from the San Francisco Bay Area living in Tokyo with my wife and newborn son.
                  As a 4th generation Japanese American, I moved to Japan in order to get closer to my ancestral heritage and have now lived here for close to 5 years.
                  In my rare free time apart from programming and parenting, I enjoy cycling around the Tokyo suburbs, drinking good coffee and shopping for denim.
                  Thanks for visiting my page!" />
                <h3 className="heading-tertiary u-margin-bottom-small">From educator to engineer</h3>
                <AboutText text="It was during the pandemic while I was still teaching at an international school where I first discovered my passion not just for coding, but for identifying issues and problem-solving through tech.
                  It began with self-studying basic HTML, CSS and Javascript to build static webpages for optimizing classroom organization which transcended into a life-long commitment towards the world of software development." />
                {/* <a href="#" className="btn-text">Learn more →</a> */}
              </div>
              <div className="col-1-of-2">
                <AboutComposition />
              </div>
            </div>
          </section>
    )
}

export default About;