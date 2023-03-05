import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList(props) {
  return (
    <ul className="conversation__list">
      {props.commentData.map((comment) => (
        <CommentItem
          id={comment.id}
          key={comment.id}
          name={comment.name}
          comment={comment.comment}
          time={comment.timestamp}
        />
      ))}
    </ul>
  );
}

export default CommentList;
