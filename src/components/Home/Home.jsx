import About from './About/About';
import TechStack from './TechStack/TechStack';
import Projects from './Experience/Projects';
import Contributions from './Projects/Contributions';

import { Sticky, StickyContainer } from 'react-sticky';


const Home = () => {

    return (
      <main>
      <StickyContainer>
          <About />
          <TechStack />
          <Projects />
          <Contributions />
        <Sticky>
        {({style}) => (
          <div style={{  ...style, 
            top: '45rem', 
            left: '50%',
            transform: 'translateX(-50%)',
            width: '15%'}} 
            className="u-center-text u-margin-top-huge">
          <a href="#" className="btn btn--green">Scroll Top</a>
          </div>
          )}
        </Sticky>
    </StickyContainer>
          </main>
      );
    }

export default Home;