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

    sidebarVids: shortList,

    fullList: longList,

    activeVid: longList[0].id,

  }

  changeVid = (id) => {
    this.setState({ activeVid: id })

  }


  render() {

    return (
      <div className="App">
        <Header />
        {this.state.fullList
        .filter(video => video.id === this.state.activeVid)
        .map((item) => (
        <Video
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          channel={item.channel}
          timestamp={item.timestamp}
          views={item.views}
          likes={item.likes}
          description={item.description}
          />
        ))}

        <Comments
          activeVid={this.state.activeVid}
          fullList={this.state.fullList}
        />
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
