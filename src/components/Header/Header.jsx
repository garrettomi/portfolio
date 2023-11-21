import Headshot from './Headshot/Headshot';
import Heading from './Heading/Heading';
import Button from './Button/Button';
import BackgroundVideo from './BackgroundVideo/BackgroundVideo';
import headshot from '../../assets/headshot-photo.png';
import portfolioVideo from '../../assets/makun-work.mp4'


const Header = () => {
    return (
    <header className='header'>
        <BackgroundVideo video={portfolioVideo} />
            <div class="header__headshot-box">
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