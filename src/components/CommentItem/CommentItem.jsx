import './CommentItem.scss';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';

const CommentItem = function ({name, time, comment}) {
    return (
        <li className="conversation__item">
            <img 
            className="conversation__comment-avatar" 
            src={Avatar} 
            alt="user-avatar" />
            <div className="conversation__container">
                <div className='conversation__name-date'>
                    <p className="conversation__name">{name}</p>
                    <p className="conversation__date">{time}</p>
                </div>
                <p className="conversation__comment" >{comment}</p>
            </div>          
        </li>
    )
}

export default CommentItem;