import './comments.scss';
import CommentForm from '../CommentForm/commentForm';
import CommentList from '../CommentList/commentlist';

function Comments({ currentVideo }) {

    return (
        <section className="comments">
            <CommentForm />
            <CommentList 
            currentVideo={currentVideo}
            />
        </section>
    )
}

export default Comments