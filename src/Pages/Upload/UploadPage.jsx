import UploadLogo from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const isFormValid = () => {
    if (title === "" || description === "") {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      alert("Thank you for uploading!");
      handleOnClickHome();
    } else {
      alert("Please check your form.");
    }
  };

  const navigate = useNavigate();
  const handleOnClickHome = function () {
    navigate("/");
  };

  return (
    <div>
      <h1 className="heading">Upload Video</h1>
      <div className="upload">
        <div className="upload__container">
          <p className="upload__text">video thumbnail</p>
          <form onSubmit={handleSubmit} className="upload__form">
            <div className="upload__desktop-wrap">
              <img
                className="upload__thumbnail"
                src={UploadLogo}
                alt="person-riding-bike"
              />
            
            <div className="upload__form-wrapper">
              <div className="upload__form-wrap">
                <div className="upload__wrap">
                  <label className="upload__label">title your video</label>
                  <input
                    className="upload__input"
                    placeholder="Add a title to your video"
                    type="text"
                    name="title"
                    onChange={handleChangeTitle}
                    value={title}
                  />
                </div>
                <label className="upload__label">add a video description</label>
                <textarea
                  className="upload__box"
                  placeholder="Add a description to your video"
                  name="description"
                  onChange={handleChangeDescription}
                  value={description}
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
            </div>
            <div className="upload__button-wrapper">
              <button
                onClick={handleSubmit}
                className="upload__submit"
                type="submit"
              >
                publish
              </button>
              <button
                onClick={handleOnClickHome}
                className="upload__cancel"
                type="button"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload;
