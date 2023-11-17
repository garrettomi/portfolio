import logoWhite from '../../assets/logo-white.png';


const Header = () => {
    return (
    <header className='header'>
                    <div class="header__logo-box">
                <img src={logoWhite} alt="Logo" class="header__logo" />
            </div>

            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Garrett Omi</span>
                    <span class="heading-primary--sub">Software Engineer</span>
                </h1>

                <a href="#section-tours" class="btn btn--white btn--animated">Check out my projects</a>
            </div>
    </header>
    
    )
}

export default Header;