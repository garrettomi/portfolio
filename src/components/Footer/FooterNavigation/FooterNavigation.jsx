
const FooterNavigation = ({ items }) => {
    return (
        <div className="footer__navigation">
            <ul className="footer__list">
                {items.map((item, index) => (
                    <li key={index} className="footer__item">
                        <a href={item.href} className="footer__link">{item.children}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterNavigation;