import './HeroInfo.scss';

const HeroInfo = function ({heroVideo}) {
    return (
        <>
        <div className="rating">
        <h1 className="rating__header">{heroVideo.title}</h1>
        <div className="rating__container">
          <div className="rating__date-title">
            <p className="rating__item rating__item--bold">By {heroVideo.channel}</p>
            <p className="rating__item">{heroVideo.timestamp}</p>
          </div>
          <div className="rating__view-likes">
            <p className="rating__item">{heroVideo.views}</p>
              <p className="rating__item">{heroVideo.likes}</p>
            </div>
        </div>
      </div>
      <div className="article">
        <p>
          {heroVideo.description}
          </p>
          </div>
          </>
    )
}

export default HeroInfo;