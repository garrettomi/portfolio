import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <section className="section-projects" id="projects">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Projects
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
              <ProjectCard
                href="https://www.kinjo-japan.com/"
                imgClass="card__picture--1"
                heading="KINJO"
                frontDetails={["Web Application", "React, Typescript, Node.js, Prisma, PostgreSQL", "An application for English-speaking locals in Japan to share and learn about hidden neighborhood destinations"]}
                backDescription= "Since I wander around Tokyo so much by bike, I'm a big lover of anything map-related when it comes to apps. Working on KINJO's map gave me free-range to nerd out and implement the map features I'd always dreamed of using with a team of equally passionate Japan enthusiasts."
                backHeading="Behind-the-scenes"
                btnText="Check it out!"
                />
              </div>
              <div className="col-1-of-3">
              <ProjectCard 
                href="https://solo-mvp-frontend.vercel.app/login" 
                imgClass="card__picture--2" 
                heading="Typemon" 
                frontDetails={["Web Application", "Next.js, Express.js, Node.js, Knex.js, PostgreSQL", "A Pokemon typing game which tests a users typing agility and accuracy with knowledge of Pokemon"]} 
                backDescription="As a 90's kid, I grew up with typing games and Saturday morning Pokemon so I figured, why not put my two childhood experiences together? It was an absolute joy interacting with the official PokeAPI and sifting through the huge amounts of Pokemon data to make this thing a reality."
                backHeading="Behind-the-scenes" 
                btnText="Check it out!" 
                />
              </div>
              <div className="col-1-of-3">
              <ProjectCard 
                href="#" 
                imgClass="card__picture--3" 
                heading="Automated Nanny Script" 
                frontDetails={["Automated Python Script", "Python, Selenium, Web-Scraping", "For boosting efficiency in inputting discounted nanny codes through a Japanese childcare subsidiary program"]} 
                backDescription="While not yet completed, this script came after acknowledging how much time my wife and I wasted copy and pasting discount codes daily for a childcare subsidiary program. On one-hand, I really can't complain about the sweet deals provided by the Japanese government for new parents. On the otherhand, dealing with two logins, two websites and mundane copy and pasting every day is a pain in the ass. So I simply decided to do what programmers do best: use tech to make life easier."
                backHeading="In Progress" 
                btnText="Source Code Coming Soon..." 
              />
              </div>
            </div>
          </section>
    )
}

export default Projects;