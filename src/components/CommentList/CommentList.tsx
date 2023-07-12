import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

interface Comment {
  id: string;
  name: string;
  timestamp: number;
  comment: string;
}

interface CommentListProps {
  commentArr: Comment[];
  handleOnClickDelete: (videoId: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  commentArr,
  handleOnClickDelete,
}): JSX.Element => {
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
};

export default CommentList;
