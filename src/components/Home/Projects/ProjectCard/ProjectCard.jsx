
const ProjectCard = ({href, imgClass, heading, details, cta, btnText}) => {

    return (
        <div className="card">
                  <div className="card__side card__side--front">
                    <div className={`card__picture ${imgClass}`}>
                      &nbsp;
                    </div>
                    <h4 className="card__heading">
                      <span className={`card__heading-span ${imgClass}`}>{heading}</span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        {
                            details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))
                        }
                        </ul>
                    </div>
                  </div>
                  <div className={`card__side card__side--back ${imgClass}`}>
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">{cta}</p>
                        <p className="card__price-value">{details[3]}
                        </p>
                      </div>
                      <a href={href} className="btn btn--white" target="_blank">{btnText}</a>
                    </div>
                  </div>
                </div>
    );
};

export default ProjectCard;