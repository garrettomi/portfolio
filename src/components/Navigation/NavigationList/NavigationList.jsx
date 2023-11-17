import NavigationItem from "../NavigationItem/NavigationItem";

const NavigationList = ({ items }) => {
    return (
        <ul className='navigation__list'>
            {items.map((item, index) => (
                <NavigationItem key={index} {...item} />
            ))}
        </ul>
    );
};

export default NavigationList;