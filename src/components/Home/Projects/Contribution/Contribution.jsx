
const Contribution = ({href, alt, src, main, sub}) => {

    return (
        <a href={href} className="nikkei-link" target="_blank">
        <figure className="organization__shape">
          <img src={src} alt={alt} className="organization__img" />
          <figcaption className="organization__caption">{main}</figcaption>
        </figure>
        <div className="organization__text">
          <h3 className="heading-tertiary u-margin-bottom-small">{sub}</h3>
          <p>
            KINJO is a full-stack application created to serve English-speaking locals living in Japan by promoting user-interaction through community awareness and sustainable travel. 
          </p>
        </div>
      </a>
    );
};

export default Contribution;