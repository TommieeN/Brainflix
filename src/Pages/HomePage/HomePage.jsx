import { useState } from "react";
import "./HomePage.scss";
import MainVideo from "../../components/MainVideo/MainVideo";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";
import videoData from "../../data/video-details.json";



function HomePage () {

  const [data] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  const handleVideoClick = (id) => {
    const foundVideo = data.find((video) => video.id === id);
    setSelectedVideo(foundVideo);
  };

    return (
        <>
        <MainVideo poster={selectedVideo.image} />
      <div className="app-container">
        <div className="app-wrapper">
          <MainVideoInfo activeVideo={selectedVideo} />
          <CommentForm commentArr={selectedVideo.comments} />
          <CommentList commentData={selectedVideo.comments} />
        </div>
        <VideoList
          videoData={data}
          selectedVideo={selectedVideo}
          handleVideoClick={handleVideoClick}
        />
      </div>
      </>
    )
}

export default HomePage;