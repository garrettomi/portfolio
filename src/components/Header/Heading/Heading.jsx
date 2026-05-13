import { useState } from "react";
import Typewriter from "../Typewriter/Typewriter";

const Heading = ({ main, sub }) => {
  const [isMainComplete, setIsMainComplete] = useState(false);

  return (
    <h1 className="heading-primary">
      <Typewriter
        className="heading-primary--main"
        text={main}
        onComplete={() => setIsMainComplete(true)}
      />
      {isMainComplete && (
        <Typewriter className="heading-primary--sub" text={sub} />
      )}
    </h1>
  );
};

export default Heading;
