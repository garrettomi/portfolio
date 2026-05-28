const Contribution = ({ href, alt, src, main, sub, desc }) => {
  return (
    <a href={href} className="nikkei-link" target="_blank">
      <figure className="organization__shape">
        <img src={src} alt={alt} className="organization__img" />
        <figcaption className="organization__caption">{main}</figcaption>
      </figure>
      <div className="organization__text">
        <h3 className="heading-tertiary u-margin-bottom-small">{sub}</h3>
        <p>{desc}</p>
      </div>
    </a>
  );
};

export default Contribution;
