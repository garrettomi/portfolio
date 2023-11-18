
const Badges = ({ logo, altText }) => {

    return (
        <div className='feature-box'>
            <img src={logo} alt={altText} className='feature-box__icon' />
        </div>
    );
};

export default Badges;