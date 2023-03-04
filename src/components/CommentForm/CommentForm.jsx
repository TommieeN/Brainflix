import './CommentForm.scss'
import Avatar from '../../assets/Images/Mohan-muruge.jpg';

function CommentForm () {
    return (
        <>
        <div className="conversation">
          <p className="conversation__comment-number">3 Comments</p>
        </div>
        <section className="conversation__wrapper" >
        <img 
          className="conversation__avatar" 
          src={Avatar} 
          alt="avatar" />    
      <form className="conversation__form">
        <div className="conversation__title-box-container">
        <label className="conversation__title">join the conversation</label>
        <textarea
          className="conversation__box"
          placeholder="Add a new comment"
          name="comment"
          id="comment"
          cols="30"
          rows="5"
        ></textarea>
        </div>
        <button 
          className="conversation__button" 
          type="submit"
        >comment</button>
        </form>
        </section>
        </>
    )
}

export default CommentForm;