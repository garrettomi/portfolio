import AboutImage from "../AboutImage/AboutImage";

import misterGarrett from '../../../../assets/mister-garrett.jpeg';
import misterGarrettLarge from '../../../../assets/mister-garrett-large.jpg';
import wedding from '../../../../assets/wedding.jpeg';
import weddingLarge from '../../../../assets/wedding-large.jpg';
import treffin from '../../../../assets/treffin.png';
import treffinLarge from '../../../../assets/treffin-large.png';

const AboutComposition = () => {

    return (
        <div className="composition">
            <AboutImage srcSet={`${misterGarrett} 300w, ${misterGarrettLarge} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="composition__photo composition__photo--p1" />
            <AboutImage srcSet={`${wedding} 300w, ${weddingLarge} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="composition__photo composition__photo--p2" />
            <AboutImage srcSet={`${treffin} 300w, ${treffinLarge} 1000w`} sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 3" className="composition__photo composition__photo--p3" />
        </div>
    )
}

export default AboutComposition;