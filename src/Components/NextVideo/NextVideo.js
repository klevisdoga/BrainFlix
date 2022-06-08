import './NextVideo.scss';
import { Link } from 'react-router-dom';

export default function NextVideo({ currentVideo, sidebar }) {

  return (
    <>
      {sidebar.filter(video => video.id !== currentVideo.id)
        .map((video) => (
          <Link key={video.id} to={'/video/' + video.id} className='video__list-link'>
            <div className="video__list-video">
              <img src={video.image} alt="thumbnail" className="video__list-video-thumbnail" />
              <div className="video__list-video-text">
                <h2 className="video__list-video-title">{video.title}</h2>
                <span className="video__list-video-channel">{video.channel}</span>
              </div>
            </div>
          </Link>
        ))}
    </>
  )
}
