import Badges from "./Badges/Badges";

import reactLogo from "../../../assets/react-icon.png";
import nextJSLogo from "../../../assets/nextjs-logo.webp";
import typescriptLogo from "../../../assets/typescript-logo.webp";
import tailwindLogo from "../../../assets/tailwind-logo.png";
import nodejsLogo from "../../../assets/nodejs-logo.png";
import graphqlLogo from "../../../assets/graphql-logo.webp";
import postgresqlLogo from "../../../assets/postgresql-logo.webp";

const TechStack = () => {
  const allBadges = [
    { logo: reactLogo, altText: "React Logo" },
    { logo: nextJSLogo, altText: "NextJS Logo" },
    { logo: typescriptLogo, altText: "TypeScript Logo" },
    { logo: nodejsLogo, altText: "NodeJS Logo" },
    { logo: tailwindLogo, altText: "Tailwind Logo" },
    { logo: graphqlLogo, altText: "GraphQL Logo" },
    { logo: postgresqlLogo, altText: "PostgreSQL Logo" },
  ];

  return (
    <section className="section-tech-stack">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Tech Stack</h2>
      </div>
      <div className="row">
        {allBadges.map((badge, index) => (
          <div className="col-1-of-4" key={index}>
            <Badges logo={badge.logo} altText={badge.altText} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
