
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
            As a yonsei, it's been an amazing honor to write code helping to preserve the largest digital archive of Nikkei history and stories.
            Coolest point so far: in the midst of optimizing data transmission for a veterans search filter, I found actual family members who served in the 442 stored in the database. 
          </p>
        </div>
      </a>
    );
};

export default Contribution;