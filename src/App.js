import './App.scss';
import Comments from './Components/Comments/comments';
import Header from './Components/Header/header';
import Video from './Components/Video/video';
import VideoList from './Components/VideoList/videolist';


function App() {
  return (
    <div className="App">
      <Header/>
      <Video/>
      <Comments />
      <VideoList />
    </div>
  );
}

export default App;
