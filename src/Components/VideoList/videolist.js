import NextVideo from '../NextVideo/nextvideo';
import './videolist.scss';

export default function VideoList({sidebarVids, changeVid, activeVid}) {

    return(
        <section className="video__list">
            <h2 className='video__list-title'>NEXT VIDEOS</h2>
            {sidebarVids
            .filter(video => video.id !== activeVid)
            .map((item) => (
                <NextVideo
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    channel={item.channel}
                    changeVid={changeVid}
                    isActive={item.id === activeVid}
                />
            ))}
        </section>
    )
}
