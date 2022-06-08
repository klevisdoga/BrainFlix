import axios from 'axios';
import { Component } from 'react';
import './NextVideo.scss';
import { videos } from '../../Data/videoURL';
import { Link } from 'react-router-dom';

export default class NextVideo extends Component {

  state = {
    sideBar: []
  }

  componentDidMount() {
    axios.get(videos).then(res => {
      this.setState({
        sideBar: res.data
      })
    })
  }
  
  render() {

    return (
      <>
        {this.state.sideBar.filter(video => video.id !== this.props.currentVideo.id)
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
}
