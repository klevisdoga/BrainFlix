import Comment from "../Comment/comment"

function CommentList({currentVideo}) {

    if (currentVideo.comments === undefined) {
        return '...'
    }

    return (
        <div className="comment__section">

            <Comment
                currentVideo={currentVideo}
            />

        </div>
    )
}

export default CommentList