import Contribution from "./Contribution/Contribution";

import japanDevLogo from "../../../assets/japan-dev-logo.jpg";
import devtoLogo from "../../../assets/dev-to-logo.webp";
import kintoneLogo from "../../../assets/kintone-logo.png";

const Contributions = () => {
  return (
    <section className="section-contributions" id="publications">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Publications</h2>
      </div>
      <div className="row">
        <div className="organization">
          <Contribution
            href="https://japan-dev.com/blog/working-as-a-solo-engineer-on-a-small-team-in-japan"
            alt="Japan Dev logo"
            src={japanDevLogo}
            main="Read Here"
            sub="Working as a Solo Engineer on a Small Team in Japan"
            desc="A candid look at what it's really like working as a solo or small-team
          engineer in Japan — and how to know if it's right for you."
          />
        </div>
      </div>
      <div className="row">
        <div className="organization">
          <Contribution
            href="https://dev.to/garrettomi/avoid-prop-drilling-with-usecontext-f4e"
            alt="dev.to logo"
            src={devtoLogo}
            main="Read Here"
            sub="Avoid Prop Drilling with useContext"
            desc="A practical guide to React's useContext hook — written for bootcamp developers ready to move beyond prop drilling and into cleaner state management."
          />
        </div>
      </div>
      <div className="row">
        <div className="organization">
          <Contribution
            href="https://dev.to/garrettomi/building-the-travel-tracker-my-homage-to-instagrams-lost-map-feature-k5o"
            alt="Kintone logo"
            src={kintoneLogo}
            main="Read Here"
            sub="Building the Travel Tracker"
            desc="A technical post-mortem on building a React travel mapping app with the Kintone REST API — winner of the 2023 Kintone Customization Hackathon."
          />
        </div>
      </div>
    </section>
  );
};

export default Contributions;
