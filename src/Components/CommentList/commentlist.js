import Comment from "../Comment/Comment"

export default function CommentList({ currentVideo }) {

    if (currentVideo.comments === undefined) {
        return '...'
    }

    return (
        <div className="comment__section">
            <Comment currentVideo={currentVideo} />
        </div>
    )
}