import NextVideo from '../NextVideo/nextvideo';
import './videolist.scss';
import vidsList from '../../Data/videos.json';

console.log(vidsList);

export default function VideoList() {

    const vids = vidsList;

    return(
        <section className="video__list">
            <h2 className='video__list-title'>NEXT VIDEOS</h2>
            {vids.map((item) => (
                <NextVideo
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    channel={item.channel}
                />
            ))}
        </section>
    )
}