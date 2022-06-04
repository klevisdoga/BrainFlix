import NextVideo from '../NextVideo/NextVideo';
import './VideoList.scss';

export default function VideoList({ currentVideo }) {

    return (
        <section className="video__list">
            <h2 className='video__list-title'>NEXT VIDEOS</h2>
            <NextVideo currentVideo={currentVideo} />
        </section>
    )
}
