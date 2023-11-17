import Headshot from './Headshot/Headshot';
import Heading from './Heading/Heading';
import Button from './Button/Button';

import headshot from '../../assets/headshot-photo.png';


const Header = () => {
    return (
    <header className='header'>
            <div class="header__logo-box">
                <Headshot src={headshot} alt="headshot" />
            </div>

            <div class="header__text-box">
                <Heading main="Garrett Omi" sub="Software Engineer" />

                <Button href="#about" className="btn btn--white btn--animated">About Me</Button>
                <Button href="#projects" className="btn btn--white btn--animated">Projects</Button>
                <Button href="#contributions" className="btn btn--white btn--animated">Contributions</Button>
            </div>
    </header>
    
    )
}

export default Header;