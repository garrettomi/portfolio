import Contribution from "./Contribution/Contribution";

import soloEngineer from "../../../assets/solo-engineer.jpg";

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
            alt="An engineer whiteboarding with a purple marker"
            src={soloEngineer}
            main="Read Here"
            sub="Japan Dev - Working as a Solo Engineer on a Small Team in Japan"
          />
        </div>
      </div>
    </section>
  );
};

export default Contributions;
