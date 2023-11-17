
const NavigationItem = ({href, alt, src, children}) => {

    return (
        <li className='navigation__item'>
            <a href={href} className='navigation__link' target='_blank'>
                <img src={src} alt={alt} />
                {children}
            </a>
        </li>
    );
};

export default NavigationItem;