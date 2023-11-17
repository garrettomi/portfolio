import About from '../About/About';
import TechStack from '../TechStack/TechStack';
import Projects from '../Projects/Projects';
import Contributions from '../Contributions/Contributions';


const Home = () => {
    return (
        <main>
          <About />
          <TechStack />
          <Projects />
          <Contributions />
        </main>
      );
    }

export default Home;