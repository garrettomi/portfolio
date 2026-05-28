import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="section-projects" id="experience">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Work Experience</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <ProjectCard
            href="https://arigatotravel.com/"
            imgClass="card__picture--1"
            heading="Arigato Travel"
            frontDetails={[
              "Software Engineer",
              "Next JS, Typescript, Tailwind, GraphQL",
              "A Japan-based travel company offering multilingual culinary and cultural tour experiences",
            ]}
            backDescription="Led migration from WordPress to a custom Next.js application, doubling performance and SEO scores. Streamlined a 3-page checkout flow into a single-page experience, increasting direct sales conversions by 60%. Built a client-side analytics pipeline, AI-powered search, and a company-wide design system."
            backHeading="My Involvement"
            btnText="Website"
          />
        </div>
        <div className="col-1-of-3">
          <ProjectCard
            href="https://discovernikkei.org/en/"
            imgClass="card__picture--2"
            heading="Discover Nikkei"
            frontDetails={[
              "Backend Engineer",
              "Python, Django, PostgreSQL, Git",
              "The largest digital archive preserving historical and contemporary stories associated with Japanese descendants and emigration.",
            ]}
            backDescription="Involved in the migration of converting a legacy codebase into a modernized tech stack -- through identifying and refactoring artifacts, reovered 19% of unused database storage and eliminated 50% of redundant website queries enhancing overall performance and optimization."
            backHeading="My Involvement"
            btnText="Website"
          />
        </div>
        <div className="col-1-of-3">
          <ProjectCard
            href="https://www.codechrysalis.io/"
            imgClass="card__picture--3"
            heading="Code Chrysalis"
            frontDetails={[
              "Student Experience Manager / Teaching Assistant",
              "Javascript, React, Node.js, PostgreSQL, TypeScript, Git",
              "An advanced coding bootcamp based in Tokyo training the next generation of engineers in Japan.",
            ]}
            backDescription="First line of technical support for bootcamp cohorts — fielding questions in public Slack channels serving 500+ developers, rubber-ducking logic problems, and translating complex concepts across experience levels. Authored and maintained program documentation, managed cohort GitHub repositories, and facilitated technical communication workshops."
            backHeading="My Involvement"
            btnText="Website"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
