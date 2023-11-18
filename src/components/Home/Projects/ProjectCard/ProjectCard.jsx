
const ProjectCard = ({href, imgClass, heading, frontDetails, backDescription, cta, btnText}) => {

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
                            frontDetails.map((frontDetail, index) => (
                                <li key={index}>{frontDetail}</li>
                            ))
                        }
                        </ul>
                    </div>
                  </div>
                  <div className={`card__side card__side--back ${imgClass}`}>
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">{cta}</p>
                        <p className="card__price-value">{backDescription}</p>
                      </div>
                      <a href={href} className="btn btn--white" target="_blank">{btnText}</a>
                    </div>
                  </div>
                </div>
    );
};

export default ProjectCard;