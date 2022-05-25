import './App.scss';
import Comments from './Components/Comments/comments';
import Header from './Components/Header/header';
import Video from './Components/Video/video';
import VideoList from './Components/VideoList/videolist';
import React from 'react';
import shortList from './Data/videos.json';
import longList from './Data/video-details.json';


class App extends React.Component {

  state = {

    currentVideo: longList[0],
    sidebarVids: shortList,

    fullList: longList,

    activeVid: null

  }

  changeVid = (id) => {
    this.setState({activeVid: id})
    
  }
  

  render() {

    return (
      <div className="App">
        <Header />
        <Video />
        <Comments />
        <VideoList 
        currentVideo={this.state.currentVideo}
        sidebarVids={this.state.sidebarVids}
        changeVid={this.changeVid}
        activeVid={this.state.activeVid}
        />
      </div>
    );
  }
}

export default App;
