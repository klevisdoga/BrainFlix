import './comments.scss';
import CommentForm from '../CommentForm/commentForm';
import CommentList from '../CommentList/commentlist';

function Comments() {

    return (
        <section className="comments">
            <CommentForm />
            <CommentList />
        </section>
    )
}

export default Comments