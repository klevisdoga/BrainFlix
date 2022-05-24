import './commentForm.scss';
import pfp from '../../Assets/Images/Mohan-muruge.jpg';

function CommentForm() {
    return (
        <div className="comments__form">
            <div className="comments__form-user">
                <img src={pfp} alt="profile" className="comments__form-user-pfp" />
                <form className="comments__form-user-text">
                    <label htmlFor="userComment" className="comments__form-user-title">JOIN THE CONVERSATION</label>
                    <textarea name="userComment" id="userComment" cols="30" rows="10" placeholder="Add a new comment"
                        className="comments__form-user-textarea" required></textarea>
                    <button className="comments__form-user-button">COMMENT</button>
                </form>
            </div>
        </div>
    )
}

export default CommentForm