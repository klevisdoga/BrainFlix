import MP4 from '../../Data/video-details.json';
import views from '../../Assets/Icons/views.svg';
import likes from '../../Assets/Icons/likes.svg';
import './video.scss';

function Video() {
    const currentVideo = MP4[0];
    const videoDate = new Date(currentVideo.timestamp).toLocaleDateString();

    return (
        <div className='video'>
            <video className='video__player' poster={currentVideo.image} controls>
                <source />
            </video>
            <div className='video__info'>
                <h1 className='video__info-title'>{currentVideo.title}</h1>
                <div className='video__info-sub'>
                    <div className='video__info-one'>
                        <h6 className='video__info-channel'>By {currentVideo.channel}</h6>
                        <span className='video__info-date'>{videoDate}</span>
                    </div>
                    <div className='video__info-two'>
                        <div className='video__info-views'>
                            <img src={views} alt="views-logo" className='video__info-views-logo' />
                            <span className='video__info-views-title'>{currentVideo.views}</span>
                        </div>
                        <div className='video__info-likes'>
                            <img src={likes} alt="likes-logo" className='video__info-likes-logo' />
                            <span className='video__info-likes-title'>{currentVideo.likes}</span>
                        </div>
                    </div>
                </div>
                <p className='video__info-description'>{currentVideo.description}</p>
                <span className='video__info-comment-count'>3 Comments</span>
            </div>
        </div>

    )
}

export default Video