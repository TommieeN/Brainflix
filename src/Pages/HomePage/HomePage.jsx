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
const apiKey = "?api_key=3880642c-78bd-4166-9c71-5b43ffa6c39d";

function HomePage() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isNewVideoSelected, setIsNewVideoSelected] = useState(false);
  const { videoId } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  //getting video list
  function getVideos() {
    axios
      .get(`${api}/videos${apiKey}`)
      .then((response) => {
        setVideoList(response.data);
        setIsNewVideoSelected(true);
      })
      .catch(() => {});
  }

  //getting selected video data
  const getVideo = useCallback((videoId) => {
    axios
      .get(`${api}/videos/${videoId}${apiKey}`)
      .then((res) => {
        setSelectedVideo(res.data);
      })
      .catch(() => {});
  }, []);

  //window scroll for video list
  const handleVideoClick = useCallback(() => {
    setIsNewVideoSelected(true);
  }, []);

  useEffect(() => {
    if (isNewVideoSelected) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsNewVideoSelected(false);
    }
  }, [isNewVideoSelected]);

  
  //fetch video data based on id
  useEffect(() => {
    let id = videoId || videoList[0]?.id;
    if (id) {
      getVideo(id);
    }
  }, [videoList, getVideo, videoId]);

  //comment submit
  const handleOnSubmit = (event) => {
    //newcomment object
    const newComment = {
      name: "Nigel",
      comment: event.target.comment.value,
    };

    //if text box is empty alert error
    if (event.target.comment.value !== "") {
      axios
        .post(`${api}/videos/${selectedVideo.id}/comments${apiKey}`, newComment)
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

  //delete function
  const handleOnClickDelete = function (commentId) {
    axios
      .delete(
        `${api}/videos/${selectedVideo.id}/comments/${commentId}${apiKey}`
      )
      .then((response) => {
        getVideo(selectedVideo.id);
      })
      .catch((error) => {
        console.log(error);
      });
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
          {selectedVideo && (
            <CommentList
              commentArr={selectedVideo.comments.sort(
                (a, b) => b.timestamp - a.timestamp
              )}
              handleOnClickDelete={handleOnClickDelete}
            />
          )}
        </div>
        {selectedVideo && videoList && (
          <VideoList videoData={videoList} id={selectedVideo.id} onClick={handleVideoClick}/>
        )}
      </div>
    </>
  );
}

export default HomePage;
