import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <section className="section-projects" id="projects">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Work Experience
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
              <ProjectCard
                href="https://arigatojapan.co.jp/"
                imgClass="card__picture--1"
                heading="Arigato Travel"
                frontDetails={["Software Engineer", "Next JS, Typescript, Tailwind, GraphQL", "A travel company specializing in multilingual culinary and cultural tours and experiences for visitors of Japan."]}
                backDescription= "Responsible for migrating the customer-facing e-commerce and blog Wordpress site to an independently dedicated Next JS application for scaling better performance and customization"
                backHeading="My Involvement"
                btnText="Website"
                />
              </div>
              <div className="col-1-of-3">
              <ProjectCard 
                href="https://discovernikkei.org/en/" 
                imgClass="card__picture--2" 
                heading="Discover Nikkei" 
                frontDetails={["Backend Engineer", "Python, Django, PostgreSQL, Git", "The largest digital archive preserving historical and contemporary stories associated with Japanese descendants and emigration."]} 
                backDescription="Involved in the migration of converting a legacy codebase into a modernized tech stack -- through identifying and refactoring artifacts, I was able to recover 19% of unused database storage and eliminate 50% of redundant website queries enhancing overall performance and optimization."
                backHeading="My Involvement" 
                btnText="Website" 
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