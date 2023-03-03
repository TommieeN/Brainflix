import './VideoItems.scss';

function VideoItem({ singleVideo, handleVideoClick }) {
  return (
    <li
      className="video__list-item"
      onClick={() => {
        handleVideoClick(singleVideo.id);
      }}
    >
      <img className="video__img" src={singleVideo.image} alt="video-list-item" />
      <div className="video__container">
        <p className="video__title">{singleVideo.title}</p>
        <p className="video__channel">{singleVideo.channel}</p>
      </div>
    </li>
  );
}

export default VideoItem;
