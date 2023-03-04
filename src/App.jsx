import './App.scss';
import {useState} from 'react';
import videoData from './data/video-details.json'
import Header from './components/Header/Header';
import Hero from './components/MainVideo/MainVideo';
import HeroInfo from './components/MainVideoInfo/MainVideoInfo';
import CommentForm from './components/CommentForm/CommentForm'
import CommentList from './components/CommentList/CommentList';
import VideoList from './components/VideoList/VideoList';




function App() {

  const [data] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videoData[0])

  const handleVideoClick = (id) => {
    const foundVideo = data.find((video) => video.id === id)
    setSelectedVideo(foundVideo)
  }
  return (
    <>
    <Header />
    <Hero poster={selectedVideo.image} />
    <HeroInfo activeVideo={selectedVideo} />
    <CommentForm />
    <CommentList 
    commentData={selectedVideo.comments}/>
    <VideoList 
    videoData={data}
    selectedVideo={selectedVideo}
    handleVideoClick={handleVideoClick}
    />
    </>
  );
}

export default App;
