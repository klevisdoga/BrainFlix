import Comment from "../Comment/comment"
import uuid from 'uniqid';

function CommentList({activeVid, fullList}) {

    return (
        <div className="comment__section">

            <Comment 
            key={uuid}
            fullList={fullList.find(video => video.id === activeVid)}
            />

        </div>
    )
}

export default CommentList