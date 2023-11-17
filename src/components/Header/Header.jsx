import headshot from '../../assets/headshot-photo.png';


const Header = () => {
    return (
    <header className='header'>
                    <div class="header__logo-box">
                <img src={headshot} alt="headshot" class="header__logo" />
            </div>

            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Garrett Omi</span>
                    <span class="heading-primary--sub">Software Engineer</span>
                </h1>

                <a href="#about" class="btn btn--white btn--animated">About Me</a>
                <a href="#projects" class="btn btn--white btn--animated">Projects</a>
                <a href="#contributions" class="btn btn--white btn--animated">Experience</a>
                {/* <a href="#contact" class="btn btn--white btn--animated">Contact</a> */}
            </div>
    </header>
    
    )
}

export default Header;