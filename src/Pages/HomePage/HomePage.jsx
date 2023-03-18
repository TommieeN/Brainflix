import "./HomePage.scss";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainVideo from "../../components/MainVideo/MainVideo";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";

const URL = "http://localhost:8080";

function HomePage() {
  const { videoId } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // GET VIDEO DATA AND STORE IN VIDEOLIST STATE
  useEffect(() => {
    axios
      .get(`${URL}/videos`)
      .then((response) => {
        const videoArr = response.data;
        setVideoList(videoArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // GETTING SELECTED VIDEO DATA
  const getVideo = useCallback((videoId, scrollToTop) => {
    axios
      .get(`${URL}/videos/${videoId}`)
      .then((res) => {
        setSelectedVideo(res.data);
        if (scrollToTop) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let id = videoId || videoList[0]?.id;
    if (id) {
      getVideo(id, true);
    }
  }, [videoId, videoList, getVideo]);

  // COMMENT SUBMIT & NEW COMMENT OBJECT
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const { comment } = event.target;
    const newComment = {
      name: "Nigel",
      comment: comment.value,
    };

    // IF TEXT BOX IS EMPTY ALERT
    if (comment.value !== "") {
      axios
        .post(`${URL}/videos/${selectedVideo.id}/comments`, newComment)
        .then(() => {
          getVideo(selectedVideo.id, false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please enter your comment");
    }
  };

  // DELETE FUNCTION
  const handleOnClickDelete = function (commentId) {
    axios
      .delete(`${URL}/videos/${selectedVideo.id}/comments/${commentId}`)
      .then((response) => {
        console.log("response: ", response);
        getVideo(selectedVideo.id, false);
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
          <VideoList videoData={videoList} id={selectedVideo.id} />
        )}
      </div>
    </>
  );
}

export default HomePage;
