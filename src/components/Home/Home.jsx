import About from '../About/About';
import TechStack from '../TechStack/TechStack';
import Projects from '../Projects/Projects';
import video from '../../assets/video.mp4';
import videoWebm from '../../assets/video.webm';
import discoverNikkei from '../../assets/discover_nikkei.png';


const Home = () => {
    return (

        <main>
          <About />
          <TechStack />
          <Projects />
          <section className="section-stories" id="contributions">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                <source src={videoWebm} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
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
          {/* <section className="section-book" id='contact'>
            <div className="row">
              <div className="book">
                <div className="book__form">
                  <form action="#" className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">
                        Let's talk!
                      </h2>
                    </div>
                    <div className="form__group">
                      <input type="text" className="form__input" placeholder="Full name" id="name" required />
                      <label htmlFor="name" className="form__label">Full name</label>
                    </div>
                    <div className="form__group">
                      <input type="email" className="form__input" placeholder="Email address" id="email" required />
                      <label htmlFor="email" className="form__label">Email address</label>
                    </div>
                    <div className="form__group u-margin-bottom-medium">
                      <div className="form__radio-group">
                        <input type="radio" className="form__radio-input" id="small" name="size" />
                        <label htmlFor="small" className="form__radio-label">
                          <span className="form__radio-button" />
                          Career Opportunity
                        </label>
                      </div>
                      <div className="form__radio-group">
                        <input type="radio" className="form__radio-input" id="large" name="size" />
                        <label htmlFor="large" className="form__radio-label">
                          <span className="form__radio-button" />
                          Collaboration
                        </label>
                      </div>
                    </div>
                    <div className="form__group">
                      <button className="btn btn--green">Next step →</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section> */}
        </main>
      );
    }

export default Home;