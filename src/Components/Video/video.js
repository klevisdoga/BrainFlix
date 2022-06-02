import './video.scss';

function Video({currentVideo}) {

    return (
        <div className='video'>
            <div className='video__player-container'>
            <video className='video__player' poster={currentVideo.image} controls>
                <source />
            </video>
            </div>
        </div>

    )
}

export default Video