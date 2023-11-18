
const Badges = ({ logo, altText }) => {

    return (
        <div className='tech-stack'>
            <img src={logo} alt={altText} className='tech-stack__icon' />
        </div>
    );
};

export default Badges;