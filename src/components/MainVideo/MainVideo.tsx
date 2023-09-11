import "./MainVideo.scss";
const URL = "https://brainflixapi.onrender.com"
const MainVideo = function ({ poster }) {
  return (
    <section>
      <video className="main-video" poster={URL + poster} controls></video>
    </section>
  );
};
export default MainVideo;
