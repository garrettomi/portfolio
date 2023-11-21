import { useState, useEffect } from "react";

const Typewriter = ({text, className}) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayText(text.slice(0, index + 1));
            setIndex(index + 1);
        }, 100);

        return () => clearTimeout(timer);
    }, [index, text]);

    return <span className={className}>{displayText}</span>
};

export default Typewriter;
