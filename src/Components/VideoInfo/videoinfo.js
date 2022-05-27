import views from '../../Assets/Icons/views.svg';
import likes from '../../Assets/Icons/likes.svg';
import './videoinfo.scss';

function VideoInfo(props) {
    const videoDate = new Date(props.timestamp).toLocaleDateString();

    return (
            <div className='video__info'>
                <h1 className='video__info-title'>{props.title}</h1>
                <div className='video__info-sub'>
                    <div className='video__info-one'>
                        <h6 className='video__info-channel'>By {props.channel}</h6>
                        <span className='video__info-date'>{videoDate}</span>
                    </div>
                    <div className='video__info-two'>
                        <div className='video__info-views'>
                            <img src={views} alt="views-logo" className='video__info-views-logo' />
                            <span className='video__info-views-title'>{props.views}</span>
                        </div>
                        <div className='video__info-likes'>
                            <img src={likes} alt="likes-logo" className='video__info-likes-logo' />
                            <span className='video__info-likes-title'>{props.likes}</span>
                        </div>
                    </div>
                </div>
                <p className='video__info-description'>{props.description}</p>
                <span className='video__info-comment-count'>{props.length} Comments</span>
            </div>

    )
}

export default VideoInfo