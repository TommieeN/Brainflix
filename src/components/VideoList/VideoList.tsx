import "./VideoList.scss";
import VideoItems from "../VideoItems/VideoItems";

interface Video {
  id: string;
  title: string;
  channel: string;
  image: string;
}

interface VideoListProps {
  videoData: Video[];
  id: string;
}

const VideoList: React.FC<VideoListProps> = ({ videoData, id }) => {
  return (
    <section className="video">
      <div className="video__container">
        <h2 className="video__header">Next Videos</h2>
        <ul className="video__list">
          {videoData
            .filter((video) => video.id !== id)
            .map((video) => (
                <VideoItems
                  key={video.id}
                  filtered={video}
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
                />
            ))}
        </ul>
      </div>
    </section>
  );
}
export default VideoList;
