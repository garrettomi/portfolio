import { useState, useEffect } from "react";

const Typewriter = ({text, className, onComplete}) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayText(text.slice(0, index + 1));
            setIndex(index + 1);
            if (index + 1 === text.length) {
                onComplete && onComplete();
            }
        }, 120);
 
        return () => clearTimeout(timer);
    }, [index, text, onComplete]);

    return <span className={className}>{displayText}</span>
};

export default Typewriter;
