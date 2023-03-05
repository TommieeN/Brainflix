import "./VideoList.scss";
import VideoItems from "../VideoItems/VideoItems";

function VideoList({ videoData, selectedVideo, handleVideoClick }) {
  return (
    <section className="video">
      <div className="video__container">
        <h2 className="video__header">Next Videos</h2>

        <ul className="video__list">
          {videoData
            .filter((video) => video.id !== selectedVideo.id)
            .map((video) => (
              <VideoItems
                key={video.id}
                singleVideo={video}
                image={video.image}
                handleVideoClick={handleVideoClick}
              />
            ))}
        </ul>
      </div>
    </section>
  );
}
export default VideoList;
