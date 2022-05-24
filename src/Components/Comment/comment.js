import './comment.scss';

function Comment(value) {
    return (
        <div className="comment">
            <div className="comment__pfp--empty"></div>
            <div className="comment__container">
                <div className="comment__top">
                    <h3 className="comment__top-name">{value.name}</h3>
                    <span className="comment__top-date">{value.timestamp}</span>
                </div>
                <div className="comment__bottom">
                    <span className="comment__bottom-comment">{value.comment}</span>
                </div>
            </div>
        </div>
    )
}

export default Comment