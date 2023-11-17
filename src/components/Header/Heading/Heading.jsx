
const Heading = ({main, sub}) => {

    return (
        <h1 className='heading-primary'>
            <span className='heading-primary--main'>{main}</span>
            <span className='heading-primary--sub'>{sub}</span>
        </h1>
    );
};

export default Heading;