import './MainVideo.scss';

const MainVideo = function (singleVideo, handleVideoClick) {
    return (
        <section  onClick={()=>{handleVideoClick(singleVideo.id)}} >
      <video 
      className="main-video"
      poster={singleVideo.poster} 
      controls>
    </video>
    </section>
    )
}
export default MainVideo;