import axios from 'axios'
import React, { Component } from 'react'
import Comments from '../../Components/Comments/comments'
import Header from '../../Components/Header/header'
import Video from '../../Components/Video/video'
import VideoInfo from '../../Components/VideoInfo/videoinfo'
import VideoList from '../../Components/VideoList/videolist'
import { API_KEY, API_LINK, videos } from '../../Data/videoURL';

class HomePage extends Component {

  state = {
    currentVideo: {},
    videos: []
  }
  setVideo = (id) => {
    if(id !== undefined){
    axios
      .get(API_LINK + id + API_KEY)
      .then(res => {
        this.setState({
          currentVideo: res.data
        })
        console.log(this.state.currentVideo.comments)
      })
      .catch(error => {
        console.log('error in get FULL request' + error)
      });
    }
  }

  componentDidMount() {
    axios.get(videos)
      .then(res => {
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

    const videoId = this.props.match.params.videoId;

    if (this.state.currentVideo.id !== videoId) {
      this.setVideo(videoId)
    }
  }

  render() {

    return (
      <div>
        <Header />
        <Video
          currentVideo={this.state.currentVideo}
        />
        <div className='videoinfo-and-list'>
          <div className='videoinfo-and-comments'>
            <VideoInfo
              currentVideo={this.state.currentVideo}
            />

            <Comments
              currentVideo={this.state.currentVideo}
            />
          </div>
          <VideoList
            currentVideo={this.state.currentVideo}
          />
        </div></div>
    )
  }
}
export default HomePage