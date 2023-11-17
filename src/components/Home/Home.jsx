import misterGarrett from '../../assets/mister-garrett.jpeg';
import misterGarrettLarge from '../../assets/mister-garrett-large.jpg';
import wedding from '../../assets/wedding.jpeg';
import weddingLarge from '../../assets/wedding-large.jpg';
import treffin from '../../assets/treffin.png';
import treffinLarge from '../../assets/treffin-large.png'
import video from '../../assets/video.mp4'
import videoWebm from '../../assets/video.webm'
import discoverNikkei from '../../assets/discover_nikkei.png';


const Home = () => {
    return (

        <main>
          <section className="section-about" id="about-me">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                About Me
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">From educator to programmer</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                  ducimus quam nisi exercitationem omnis earum qui.
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">Purpose</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                </p>
                <a href="#" className="btn-text">Learn more →</a>
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
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world" />
                  <h3 className="heading-tertiary u-margin-bottom-small">React</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Python</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Django</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Node.js</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="projects" id="projects">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Projects
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                      &nbsp;
                    </div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">KINJO</span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>Web Application</li>
                        <li>Full Stack Engineer</li>
                        <li>React, Typescript, Node.js, Prisma, PostgreSQL</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">My involvement</p>
                        <p className="card__price-value">Explanation of project</p>
                      </div>
                      <a href="https://www.kinjo-japan.com/" className="btn btn--white" target="_blank">Check it out!</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">
                      &nbsp;
                    </div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">Typemon</span>
                    </h4>
                    <div className="card__details">
                      <ul>
                      <li>Web Application</li>
                        <li>Full Stack Engineer</li>
                        <li>React, Typescript, Node.js, Prisma, PostgreSQL</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                      <p className="card__price-only">My involvement</p>
                        <p className="card__price-value">Explanation of project</p>
                      </div>
                      <a href="https://solo-mvp-frontend.vercel.app/login" className="btn btn--white" target="_blank">Check it out!</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">
                      &nbsp;
                    </div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">Nanny Discount Code Automator</span>
                    </h4>
                    <div className="card__details">
                      <ul>
                      <li>Python Script</li>
                        <li>Back End Engineer</li>
                        <li>Python Selenium</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">What I Did</p>
                        <p className="card__price-value">Explanation</p>
                      </div>
                      <a href="#popup" className="btn btn--white">Source Code In Progress</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">Back to the top</a>
            </div>
          </section>
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
                <figure className="story__shape">
                  <img src={discoverNikkei} alt="Discover Nikkei Logo" className="story__img" />
                  <figcaption className="story__caption">Discover Nikkei</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">Discover Nikkei - Software Engineer</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                  </p>
                </div>
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
          <section className="section-book" id='contact'>
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
          </section>
        </main>
      );
    }

export default Home;