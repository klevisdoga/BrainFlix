import Comment from "../Comment/comment"
import {v4 as uuid } from 'uuid';

function CommentList({activeVid, fullList}) {
    return (
        <div className="comment__section">

            <Comment 
            key={uuid()}
            currentVideo={fullList.find(video => video.id === activeVid)}
            />

        </div>
    )
}

export default CommentList