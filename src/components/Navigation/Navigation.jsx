import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/linkedin.png';
// import mailLogo from '../../assets/mail.png'

const Navigation = () => {
    
    return (
        <div className='navigation'>
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="https://www.linkedin.com/in/garrett-omi/" class="navigation__link" target='_blank'><img src={linkedinLogo} alt='LinkedIn Logo' />LinkedIn</a></li>
                    <li class="navigation__item"><a href="https://github.com/garrettomi" class="navigation__link" target='_blank'><img src={githubLogo} alt='Github Logo' />Github</a></li>
                    {/* <li class="navigation__item"><a href="#" class="navigation__link"><img src={mailLogo} alt='Mail Logo' />omigarrett@gmail.com</a></li> */}
                    </ul>
            </nav>
        </div>
    )
};

export default Navigation;