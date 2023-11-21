
const FooterNavigation = ({ items }) => {
    return (
        <div className="footer__navigation">
        <ul className="footer__list">
            {items.map((item, index) => (
               <li key={index} className="footer__item">
                   <a href={item.href} className="footer__link">
                       <img src={item.src} alt={item.children} className='footer__image' />
                   </a>
               </li>
            ))}
        </ul>
    </div>
    );
};

export default FooterNavigation;