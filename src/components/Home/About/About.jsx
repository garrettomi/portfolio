import AboutText from "./AboutText/AboutText";
import AboutComposition from "./AboutComposition/AboutComposition";

const ABOUT_TEXT_FIRST_SECTION =
  "Hi, I'm Garrett — a software engineer from the San Francisco Bay Area who's been living in Japan for the past seven years. As a 4th generation Japanese American, moving to Japan was a way to get closer to my ancestral roots, and it's become home. I live in Kamakura with my wife, son, and second child on the way. When I'm not coding, I'm roasting coffee at home, walking along the Shonan coast, and reading books. If it's not code-related, hit me up if you want to know my favorite coffee shops in the area or what I've been reading lately!";

const ABOUT_TEXT_SECOND_SECTION =
  "My path into software started during the pandemic while teaching at an international school. What started as building HTML and CSS static pages for fun pivoted into a full career change. Before writing production code, I spent time at a coding bootcamp as a teaching assistant and technical support lead, helping aspiring developers debug, communicate, and ship. Today, I build production applications in React, TypeScript, and Next.js, but I find the most satisfaction in intertwining my educational background with my newly developed technical skills. Specifically, bridging gaps in teams between implementation and explanation — making technical work legible to everyone in the room.";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About Me</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Who am I?</h3>
          <AboutText text={ABOUT_TEXT_FIRST_SECTION} />
          <h3 className="heading-tertiary u-margin-bottom-small">
            From educator to engineer
          </h3>
          <AboutText text={ABOUT_TEXT_SECOND_SECTION} />
        </div>
        <div className="col-1-of-2">
          <AboutComposition />
        </div>
      </div>
    </section>
  );
};

export default About;
