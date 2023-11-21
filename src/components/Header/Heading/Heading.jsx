import Typewriter from "../Typewriter/Typewriter";

const Heading = ({main, sub}) => {

    return (
        <h1 className='heading-primary'>
            {/* <span className='heading-primary--main'>{main}</span>
            <span className='heading-primary--sub'>{sub}</span> */}
            <Typewriter className='heading-primary--main' text={main} />
            <Typewriter className='heading-primary--sub' text={sub} />
        </h1>
    );
};

export default Heading;