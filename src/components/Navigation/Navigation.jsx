import NavigationButton from './NavigationButton/NavigationButton';
import NavigationBackground from './NavigationBackground/NavigationBackground';
import NavigationList from './NavigationList/NavigationList';

import githubLogo from '../../assets/github.png';
import linkedinLogo from '../../assets/linkedin.png';
// import mailLogo from '../../assets/mail.png'


const Navigation = () => {
    const items = [
        {
            href: "https://www.linkedin.com/in/garrett-omi/",
            alt: "LinkedIn Logo",
            src: linkedinLogo,
            children: "LinkedIn"
        },
        {
            href: "https://github.com/garrettomi",
            alt: "Github Logo",
            src: githubLogo,
            children: "Github"
        }
    ]
    
    return (
        <div className='navigation'>
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

            <NavigationButton id="navi-toggle" />
            <NavigationBackground />
            <nav className="navigation__nav">
                <NavigationList items={items} />
            </nav>
        </div>
    )
};

export default Navigation;