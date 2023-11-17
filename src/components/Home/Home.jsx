import misterGarrett from '../../assets/mister-garrett.jpeg';
import misterGarrettLarge from '../../assets/mister-garrett-large.jpg';
import wedding from '../../assets/wedding.jpeg';
import weddingLarge from '../../assets/wedding-large.jpg';
import treffin from '../../assets/treffin.png';
import treffinLarge from '../../assets/treffin-large.png';
import reactLogo from '../../assets/react-icon.png';
import pythonLogo from '../../assets/python-logo.png';
import djangoLogo from '../../assets/django-logo.png';
import nodejsLogo from '../../assets/nodejs-logo.png';
import video from '../../assets/video.mp4';
import videoWebm from '../../assets/video.webm';
import discoverNikkei from '../../assets/discover_nikkei.png';


const Home = () => {
    return (

        <main>
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
                        <li>React, Typescript, Node.js, Prisma, PostgreSQL</li>
                        <li>An application for English-speaking locals in Japan to share and learn about hidden neighborhood destinations.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Behind-the-scenes</p>
                        <p className="card__price-value">Since I wander around Tokyo so much by bike, I'm a big lover of anything map-related when it comes to apps.
                        Working on KINJO's map gave me free-range to nerd out and implement the map features I'd always dreamed of using with a team of equally passionate Japan enthusiasts.
                        </p>
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
                      <li>Next.js, Express.js, Node.js, Knex.js, PostgreSQL</li>
                      <li>A Pokemon typing game which tests a users typing agility and accuracy with knowledge of Pokemon</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                      <p className="card__price-only">Behind-the-scenes</p>
                        <p className="card__price-value">As a 90's kid, I grew up with typing games and Saturday morning Pokemon so I figured, why not put my two childhood experiences together?
                        It was an absolute joy interacting with the official PokeAPI and sifting through the huge amounts of Pokemon data to make this thing a reality.
                        </p>
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
                      <span className="card__heading-span card__heading-span--3">Kidsline Discount Code Automator</span>
                    </h4>
                    <div className="card__details">
                      <ul>
                      <li>Automated Python Script</li>
                      <li>Python, Selenium, Web-Scraping</li>
                      <li>For boosting efficiency in inputting discounted nanny codes through a Japanese childcare subsidiary program</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">In Progress</p>
                        <p className="card__price-value">While not yet completed yet, this script came after acknowledging how much time my wife and I wasted copy and pasting discount codes daily for a childcare subsidiary program.
                        On one-hand, I really can't complain about the sweet deals provided by the Japanese government for new parents. 
                        On the otherhand, dealing with two logins, two websites and mundane copy and pasting every day is a pain in the ass.
                        So I simply decided to do what programmers do best: use tech to make life easier.
                        </p>
                      </div>
                      <a className="btn btn--white">Source Code Coming Soon...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-stories" id="contributions">
            <a href="https://discovernikkei.org/en/" target="_blank">
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
                    As a yonsei, it's been an amazing honor to write code helping to preserve the largest digital archive of Nikkei history and stories.
                    Coolest point so far: in the midst of optimizing data transmission for a veterans search filter, I found actual family members who served in the 442 stored in the database. 
                  </p>
                </div>
              </div>
              <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">Back to the top</a>
            </div>
            </div>
            </a>
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