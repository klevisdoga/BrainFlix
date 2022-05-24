import MP4 from '../../Data/video-details.json';
import views from '../../Assets/Icons/views.svg';
import likes from '../../Assets/Icons/likes.svg';
import './video.scss';

function Video() {
    const videos = MP4[0];
    const videoDate = new Date(videos.timestamp).toLocaleDateString();

    return (
        <div className='video'>
            <video className='video__player' poster={videos.image} controls>
                <source />
            </video>
            <div className='video__info'>
                <h1 className='video__info-title'>{videos.title}</h1>
                <div className='video__info-sub'>
                    <div className='video__info-one'>
                        <h6 className='video__info-channel'>By {videos.channel}</h6>
                        <span className='video__info-date'>{videoDate}</span>
                    </div>
                    <div className='video__info-two'>
                        <div className='video__info-views'>
                            <img src={views} alt="views-logo" className='video__info-views-logo' />
                            <span className='video__info-views-title'>{videos.views}</span>
                        </div>
                        <div className='video__info-likes'>
                            <img src={likes} alt="likes-logo" className='video__info-likes-logo' />
                            <span className='video__info-likes-title'>{videos.likes}</span>
                        </div>
                    </div>
                </div>
                <p className='video__info-description'>{videos.description}</p>
                <span className='video__info-comment-count'>3 Comments</span>
            </div>
        </div>

    )
}

export default Video