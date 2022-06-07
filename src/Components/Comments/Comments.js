import './Comments.scss';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

export default function Comments({ currentVideo }) {

    return (
        <section className="comments">
            <CommentForm />
            <CommentList currentVideo={currentVideo}  />
        </section>
    )
}
