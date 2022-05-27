import './video.scss';

function Video(props) {

    return (
        <div className='video'>
            <div className='video__player-container'>
            <video className='video__player' poster={props.image} controls>
                <source />
            </video>
            </div>
        </div>

    )
}

export default Video