import "./HomePage.scss";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainVideo from "../../components/MainVideo/MainVideo";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";

export const api = "https://project-2-api.herokuapp.com";
const apiKey = "?api_key=452e3eb4-46e4-441a-91fd-af12a02a473c";



function HomePage() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  function getVideos() {
    axios
      .get(`${api}/videos${apiKey}`)
      .then((response) => {
        setVideoList(response.data);
      })
      .catch(() => {});
  }
  const getVideo = useCallback((videoId) => {
    axios
      .get(`${api}/videos/${videoId}${apiKey}`)
      .then((res) => {
        setSelectedVideo(res.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    let id = videoId || videoList[0]?.id;
    if (id) {
      getVideo(id);
    }
  }, [videoList, getVideo, videoId]);

  const handleOnSubmit = (event) => {

  const newComment = {
      name: "Nigel",
      comment: event.target.comment.value,
      }

    if (event.target.comment.value !== "") {
      axios
        .post(`${api}/videos/${selectedVideo.id}/comments${apiKey}`,
          newComment,
        )
        .then((response) => {
          console.log("response1", response);
          getVideo(selectedVideo.id);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please enter your comment");
    }
  };

  return (
    <>
      {selectedVideo && <MainVideo poster={selectedVideo.image} />}
      <div className="app-container">
        <div className="app-wrapper">
          {selectedVideo && <MainVideoInfo activeVideo={selectedVideo} />}
          {selectedVideo && (
            <CommentForm
              commentNum={selectedVideo}
              handleOnSubmit={handleOnSubmit}
            />
          )}
          {selectedVideo && <CommentList commentArr={selectedVideo.comments} />}
        </div>
        {selectedVideo && videoList && (
          <VideoList videoData={videoList} id={selectedVideo.id} />
        )}
      </div>
    </>
  );
}

export default HomePage;
