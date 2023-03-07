// import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadLogo from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";

function Upload() {
  return (
    <div>
      <h1 className="heading">Upload Video</h1>
      <div className="upload">
        <div className="upload__desktop-wrap">
          <p className="upload__text">video thumbnail</p>
          <img
            className="upload__thumbnail"
            src={UploadLogo}
            alt="person-riding-bike"
          />
        </div>
        <div className="upload__container">
          <form class="upload__form">
            <div class="upload__wrap">
              <label class="upload__label" for="name">
                title your video
              </label>
              <input
                class="upload__input"
                placeholder="Add a title to your video"
                type="text"
                id="title"
                name="title"
              />
            </div>
            <label class="upload__label" for="description">
              add a video description
            </label>
            <textarea
              class="upload__box"
              placeholder="Add a description to your video"
              name="description"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </form>
        </div>
      </div>
      <div className="upload__button-wrapper">
        <button class="upload__submit" type="submit">
          publish
        </button>
        <button class="upload__cancel" type="submit">
          cancel
        </button>
      </div>
    </div>
  );
}

export default Upload;
