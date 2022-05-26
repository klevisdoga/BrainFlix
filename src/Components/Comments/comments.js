import './comments.scss';
import CommentForm from '../CommentForm/commentForm';
import CommentList from '../CommentList/commentlist';

function Comments({ activeVid, fullList }) {

    return (
        <section className="comments">
            <CommentForm />
            <CommentList 
                activeVid={activeVid}
                fullList={fullList}
            />
        </section>
    )
}

export default Comments