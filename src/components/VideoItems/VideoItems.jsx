import "./VideoItems.scss";
import { Link } from "react-router-dom";
const URL = "https://brainflixapi.onrender.com"

function VideoItem({ title, channel, image, filtered, onClick }) {
  return (
    <li className="video__list-item" onClick={onClick}>
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
