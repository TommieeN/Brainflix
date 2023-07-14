import { useState, ChangeEvent, FormEvent } from "react";
import "./CommentForm.scss";
import Avatar from "../../assets/Images/Mohan-muruge.jpg";

interface CommentFormProps {
  commentNum: {comments: any[] };
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const CommentForm = ({ commentNum, onSubmit }: CommentFormProps) => {
  const [comment, setComment] = useState<string>("");

  //PREVENT DEFAULT BEHAVIOUR AND CLEAR TEXT FIELD AFTER SUBMISSION
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
    setComment("");
  };

  return (
    <>
      <div className="conversation">
        <p className="conversation__comment-number">
          {commentNum.comments.length} Comments
        </p>
      </div>
      <section className="conversation__wrapper">
        <img className="conversation__avatar" src={Avatar} alt="avatar" />
        <form className="conversation__form" onSubmit={handleFormSubmit}>
          <div className="conversation__title-box-container">
            <label className="conversation__title">join the conversation</label>
            <textarea
              className="conversation__box"
              placeholder="Add a new comment"
              name="comment"
              id="comment"
              cols={30}
              rows={5}
              value={comment}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button className="conversation__button" type="submit">
            comment
          </button>
        </form>
      </section>
    </>
  );
}

export default CommentForm;
