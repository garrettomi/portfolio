import Contribution from './Contribution/Contribution';

import kinjo from '../../../assets/kinjo_home.jpg';

const Contributions = () => {
    return (
        <section className="section-contributions" id="projects">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Projects
              </h2>
            </div>
            <div className="row">
              <div className="organization">
              <Contribution href="https://www.kinjo-japan.com/" alt="Kinjo Logo" src={kinjo} main="KINJO" sub="KINJO - Fullstack Engineer - React JS, Typescript, Node.js, PostgreSQL"/>
              </div>
            </div>
          </section>
    )
}

export default Contributions;