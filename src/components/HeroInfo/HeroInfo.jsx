import './HeroInfo.scss';

const HeroInfo = function ({activeVideo}) {
    return (
        <>
        <div className="rating">
        <h1 className="rating__header">{activeVideo.title}</h1>
        <div className="rating__container">
          <div className="rating__date-title">
            <p className="rating__item rating__item--bold">By {activeVideo.channel}</p>
            <p className="rating__item">{activeVideo.timestamp}</p>
          </div>
          <div className="rating__view-likes">
            <p className="rating__item">{activeVideo.views}</p>
              <p className="rating__item">{activeVideo.likes}</p>
            </div>
        </div>
      </div>
      <div className="article">
        <p>
          {activeVideo.description}
          </p>
          </div>
          </>
    )
}

export default HeroInfo;