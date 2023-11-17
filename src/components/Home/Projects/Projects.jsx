
const Projects = () => {
    return (
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
    )
}

export default Projects;