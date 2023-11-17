import nat1 from '../../assets/nat-1.jpg';
import nat1Large from '../../assets/nat-1-large.jpg';
import nat2 from '../../assets/nat-2.jpg';
import nat2Large from '../../assets/nat-2-large.jpg';
import nat3 from '../../assets/nat-3.jpg';
import nat3Large from '../../assets/nat-3-large.jpg';
import video from '../../assets/video.mp4'
import videoWebm from '../../assets/video.webm'
import nat8 from '../../assets/nat-8.jpg';
import nat9 from '../../assets/nat-9.jpg';


const Home = () => {
    return (

        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Exciting tours for adventurous people
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                  ducimus quam nisi exercitationem omnis earum qui.
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                </p>
                <a href="#" className="btn-text">Learn more →</a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                <img srcSet={`${nat1} 300w, ${nat1Large} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="composition__photo composition__photo--p1" />
                <img srcSet={`${nat2} 300w, ${nat2Large} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="composition__photo composition__photo--p2" />
                <img srcSet={`${nat3} 300w, ${nat3Large} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 3" className="composition__photo composition__photo--p3" />
                </div>
              </div>
            </div>
          </section>
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Most popular tours
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
                      <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tours</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$297</p>
                      </div>
                      <a href="#popup" className="btn btn--white">Book now!</a>
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
                      <span className="card__heading-span card__heading-span--2">The Forest Hiker</span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>7 day tours</li>
                        <li>Up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: medium</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$497</p>
                      </div>
                      <a href="#popup" className="btn btn--white">Book now!</a>
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
                      <span className="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">$897</p>
                      </div>
                      <a href="#popup" className="btn btn--white">Book now!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">Discover all tours</a>
            </div>
          </section>
          <section className="section-stories">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                <source src={videoWebm} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                We make people genuinely happy
              </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img src={nat8} alt="Person on a tour" className="story__img" />
                  <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img src={nat9} alt="Person on a tour" className="story__img" />
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
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn-text">Read all stories →</a>
            </div>
          </section>
          <section className="section-book">
            <div className="row">
              <div className="book">
                <div className="book__form">
                  <form action="#" className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">
                        Start booking now
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
                          Small tour group
                        </label>
                      </div>
                      <div className="form__radio-group">
                        <input type="radio" className="form__radio-input" id="large" name="size" />
                        <label htmlFor="large" className="form__radio-label">
                          <span className="form__radio-button" />
                          Large tour group
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