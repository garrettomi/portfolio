import { useState } from "react";
import Typewriter from "../Typewriter/Typewriter";

const Heading = ({main, sub}) => {
    const [isMainComplete, setIsMainComplete] = useState(false);

    return (
        <h1 className='heading-primary'>
            {/* <span className='heading-primary--main'>{main}</span>
            <span className='heading-primary--sub'>{sub}</span> */}
            <Typewriter className='heading-primary--main' text={main} onComplete={() => setIsMainComplete(true)} />
           {isMainComplete && <Typewriter className='heading-primary--sub' text={sub} />}
        </h1>
    );
};

export default Heading;