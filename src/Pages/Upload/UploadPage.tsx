import axios from "axios";
import UploadLogo from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
const URL = "https://brainflixapi.onrender.com";

const Upload: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  //FORM VALIDATION TRIM WHITE SPACE
  const isFormValid = () => {
    return title.trim().length > 0 && description.trim().length > 0;
  };

  //PREVENT DEFAULT BEHAVIOUR AFTER SUBMIT
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    //ALERT BASED ON VALIDATION
    if (isFormValid()) {
      try {
        const response = await axios.post(`${URL}/videos`, {
          title,
          description,
          image: `${URL}/videos/images/image0.jpeg`,
        });
        alert("Thank you for uploading!");
        handleOnClickHome();
      } catch (error) {
        console.log(error);
        alert("Title and description must be at least 5 characters long");
      }
    } else {
      alert("Please check your form.");
    }
  };

  //NAVIGATE TO HOME AFTER SUBMISSION
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
                <div className="upload__form-wrap">
                  <label className="upload__label">
                    add a video description
                  </label>
                  <textarea
                    className="upload__box"
                    placeholder="Add a description to your video"
                    name="description"
                    onChange={handleChangeDescription}
                    value={description}
                    cols={30}
                    rows={5}
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
};

export default Upload;
