import './Video.scss';

export default function Video({ currentVideo }) {

    return (
        <div className='video'>
            <div className='video__player-container'>
                <video className='video__player' poster={currentVideo.image} controls></video>
            </div>
        </div>
    )
}