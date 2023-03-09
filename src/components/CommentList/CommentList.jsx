import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";


function CommentList({ commentArr }) {
  return (
    <ul className="conversation__list">
      {commentArr &&
      commentArr.map((comment) => (
        <CommentItem 
        key={comment.id}
        name={comment.name}
        time={comment.timestamp}
        comment={comment.comment}
        />
      ))}
    </ul>
  );
}


export default CommentList;
