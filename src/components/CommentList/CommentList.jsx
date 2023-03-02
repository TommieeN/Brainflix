import './CommentList.scss';
import CommentItem from '../CommentItem/CommentItem';

const CommentList = function (props) {
    return (
        <ul className="conversation__list" >
            <CommentItem />
        </ul>
    )
}

export default CommentList;