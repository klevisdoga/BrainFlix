import './comment.scss';

function Comment({ fullList }) {

    return (
        <>
            {fullList.comments.map(comment => {
                return (
                    <div className="comment">
                        <div className="comment__pfp--empty"></div>
                        <div className="comment__container">

                            <div className="comment__top">
                                <h3 className="comment__top-name">{comment.name}</h3>
                                <span className="comment__top-date">{new Date(comment.timestamp).toLocaleDateString()}</span>
                            </div>
                            <div className="comment__bottom">
                                <span className="comment__bottom-comment">{comment.comment}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Comment