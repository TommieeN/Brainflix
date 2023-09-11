import "./VideoItems.scss";
import { Link } from "react-router-dom";
const URL = "https://brainflixapi.onrender.com"

interface VideoItemProps {
  title: string;
  channel: string;
  image: string;
  filtered: { id: string};
}

const VideoItem: React.FC<VideoItemProps> = ({ title, channel, image, filtered }) => {
  return (
    <li className="video__list-item">
      <Link key={filtered.id} to={`/videos/${filtered.id}`}>
        <img className="video__img" src={URL + image} alt={`${title} thumbnail`} />
        <div className="video__container">
          <p className="video__title">{title}</p>
          <p className="video__channel">{channel}</p>
        </div>
      </Link>
    </li>
  );
}

export default VideoItem;
