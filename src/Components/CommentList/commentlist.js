import Comment from "../Comment/comment"
import comments from '../../Data/video-details.json';

function CommentList() {

    const eachComment = comments[0].comments;

    return (
        <div className="comment__section">
            {eachComment.map((item) => (
                <Comment
                name = { item.name }
                comment = { item.comment }
                timestamp = { new Date(item.timestamp).toLocaleDateString() }
                />
            ))}
        </div>
    )
}

export default CommentList