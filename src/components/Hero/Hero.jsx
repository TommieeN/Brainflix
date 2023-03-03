import './Hero.scss';

const Hero = function (singleVideo, handleVideoClick) {
    return (
        <section  onClick={()=>{handleVideoClick(singleVideo.id)}} >
      <video 
      className="hero"
      poster={singleVideo.poster} 
      controls>
    </video>
    </section>
    )
}
export default Hero;