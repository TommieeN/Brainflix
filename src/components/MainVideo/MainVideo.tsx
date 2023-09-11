import "./MainVideo.scss";
const URL = "https://brainflixapi.onrender.com"

interface MainVideoProps {
  poster: string;
}

const MainVideo: React.FC<MainVideoProps> = ({ poster }) => {
  return (
    <section>
      <video className="main-video" poster={URL + poster} controls></video>
    </section>
  );
};
export default MainVideo;
