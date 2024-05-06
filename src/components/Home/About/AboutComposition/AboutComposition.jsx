import AboutImage from "../AboutImage/AboutImage";

import headshotPhoto from '../../../../assets/headshot-photo.png'

const AboutComposition = () => {

    return (
        <div className="composition">
            <AboutImage srcSet={`${headshotPhoto} 300w, ${headshotPhoto} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Coding at work with my son" className="composition__photo composition__photo--p3" />
        </div>
    )
}

export default AboutComposition;