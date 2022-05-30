import './App.scss';
import Comments from './Components/Comments/comments';
import Header from './Components/Header/header';
import Video from './Components/Video/video';
import VideoList from './Components/VideoList/videolist';
import React from 'react';
import shortList from './Data/videos.json';
import longList from './Data/video-details.json';
import VideoInfo from './Components/VideoInfo/videoinfo';
import UploadPage from './pages/UploadPage/uploadpage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/homepage';


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
        <BrowserRouter>
          <Switch>
            <Route path='/' exact 
              render={
                (routerProps) =>
                  <HomePage
                    fullList={this.state.fullList}
                    activeVid={this.state.activeVid}
                    sidebarVids={this.state.sidebarVids}
                    changeVid={this.changeVid}
                    {...routerProps}

                  />
              } />
            <Route path='/upload'component={UploadPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
