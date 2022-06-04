import './CommentForm.scss';
import pfp from '../../Assets/Images/Mohan-muruge.jpg';

export default function CommentForm() {

    const submitForm = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className="comments__form">
            <div className="comments__form-user">
                <img src={pfp} alt="profile" className="comments__form-user-pfp" />
                <form onSubmit={submitForm} className="comments__form-user-text">
                    <label htmlFor="userComment" className="comments__form-user-title">JOIN THE CONVERSATION</label>
                    <div className='comments__form-user-text--container'>
                        <textarea name="userComment" id="userComment" cols="30" rows="10" placeholder="Add a new comment"
                            className="comments__form-user-textarea" required></textarea>
                        <button className="comments__form-user-button">COMMENT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}