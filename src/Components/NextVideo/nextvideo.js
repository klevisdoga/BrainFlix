import './nextvideo.scss';

export default function NextVideo(props) {

  const clickHandler = () => {
    console.log(props.id)
    props.changeVid(props.id)
 }


  return (
    <div
      onClick={clickHandler}
      className="video__list-video">
      <img src={props.image} alt="thumbnail" className="video__list-video-thumbnail" />
      <div className="video__list-video-text">
        <h2 className="video__list-video-title">{props.title}</h2>
        <span className="video__list-video-channel">{props.channel}</span>
      </div>
    </div>
  )
}