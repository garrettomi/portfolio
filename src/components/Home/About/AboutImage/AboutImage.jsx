
const AboutImage = ({ srcSet, sizes, alt, className }) => {

    return (
        <img srcSet={srcSet} sizes={sizes} alt={alt} className={className} />
    );
};

export default AboutImage;