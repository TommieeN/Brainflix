import "./HomePage.scss";
import axios from "axios";
import { useCallback, useEffect, useState, FormEvent } from "react";
import { useParams } from "react-router-dom";
import MainVideo from "../../components/MainVideo/MainVideo";
import MainVideoInfo from "../../components/MainVideoInfo/MainVideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";

const URL = "https://brainflixapi.onrender.com";

interface Video {
  id: string;
  title: string;
  channel: string;
  timestamp: Date;
  views: number;
  likes: number;
  description: string;
  image: string;
  comments: Comment[];
}


interface Comment {
  id: string;
  name: string;
  comment: string;
  timestamp: number;
}

const HomePage: React.FC = () => {
  const { videoId } = useParams<{ videoId?: string }>();
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  //GET VIDEO DATA AND STORE IN VIDEOLIST STATE
  useEffect(() => {
    axios
      .get<Video[]>(`${URL}/videos`)
      .then((response) => {
        const videoArr = response.data;
        setVideoList(videoArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //GETTING SELECTED VIDEO DATA
  const getVideo = useCallback((videoId: string, scrollToTop: boolean) => {
    axios
      .get<Video>(`${URL}/videos/${videoId}`)
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

  //FETCH VIDEO DATA ON MOUNT
  useEffect(() => {
    const id = videoId || videoList[0]?.id;
    if (id) {
      getVideo(id, true);
    }
  }, [videoId, videoList, getVideo]);

  //COMMENT SUBMIT & NEW COMMENT OBJECT
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    const comment = (event.target as any).comment as HTMLInputElement;
    const newComment: Comment = {
      id: "",
      name: "Nigel",
      comment: comment.value,
      timestamp: Date.now(),
    };

    //IF TEXT BOX IS EMPTY ALERT
    if (comment.value.trim() !== "") {
      axios
        .post(`${URL}/videos/${selectedVideo?.id}/comments`, newComment)
        .then(() => {
          getVideo(selectedVideo?.id || "", false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please enter your comment");
    }
  };

  //DELETE FUNCTION
  const handleOnClickDelete = (commentId: string) => {
    axios
      .delete(`${URL}/videos/${selectedVideo?.id}/comments/${commentId}`)
      .then(() => {
        getVideo(selectedVideo?.id || "", false);
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
              commentNum={selectedVideo?.comments.length || 0}
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
