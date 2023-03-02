import './CommentItem.scss';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';

const CommentItem = function ({name, timeStamp, comment}) {
    return (
        <li>
            <img className="conversation__comment-avatar" src={Avatar} alt="avatar-image" />
            <div>
                <p>{name}</p>
                <p>{timeStamp}</p>
            </div>
            <p>{comment}</p>
        </li>
    )
}

export default CommentItem;