import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList({ commentArr, handleOnClickDelete }) {
  return (
    <ul className="conversation__list">
      {commentArr &&
        commentArr.map((comment) => (
          <CommentItem
            key={comment.id}
            videoId={comment.id}
            name={comment.name}
            time={comment.timestamp}
            comment={comment.comment}
            handleOnClickDelete={handleOnClickDelete}
          />
        ))}
    </ul>
  );
}

export default CommentList;
