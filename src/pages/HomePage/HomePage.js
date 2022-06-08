import axios from 'axios';
import './HomePage.scss';
import React, { Component } from 'react';
import Comments from '../../Components/Comments/Comments';
import Video from '../../Components/Video/Video';
import VideoInfo from '../../Components/VideoInfo/VideoInfo';
import VideoList from '../../Components/VideoList/VideoList';
import { API_KEY, API_LINK, videos } from '../../Data/videoURL';

export default class HomePage extends Component {

  state = {
    currentVideo: {},
    videos: []
  }

  setVideo = (id) => {
    if (id !== undefined) {
      axios.get(API_LINK + id + API_KEY).then(res => {
        this.setState({
          currentVideo: res.data
        })
      })
        .catch(error => {
          console.log('error in get FULL request' + error)
        });
    }
  }

  componentDidMount() {
    axios.get(videos).then(res => {
      this.setState({
        videos: res.data
      })

      const videoId = res.data[0].id;
      this.setVideo(videoId)
    })
      .catch(error => {
        console.log(error)
      });
  }

  componentDidUpdate() {
    let videoId = this.props.match.params.videoId;

    if (this.props.match.path === '/' && this.state.currentVideo.id !== this.state.videos[0].id) {
      this.setVideo(this.state.videos[0].id)
    }
    else if (this.state.currentVideo.id !== videoId) {
      this.setVideo(videoId)
    }
  }

  render() {

    return (
      <div>
        <Video currentVideo={this.state.currentVideo} />
        <div className='videoinfo-and-list'>
          <div className='videoinfo-and-comments'>
            <VideoInfo currentVideo={this.state.currentVideo} />
            <Comments currentVideo={this.state.currentVideo} />
          </div>
          <VideoList currentVideo={this.state.currentVideo} sidebar={this.state.videos}/>
        </div>
      </div>
    )
  }
}
