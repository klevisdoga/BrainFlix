import './App.scss';
import Comments from './Components/Comments/comments';
import Header from './Components/Header/header';
import Video from './Components/Video/video';


function App() {
  return (
    <div className="App">
      <Header/>
      <Video/>
      <Comments />
    </div>
  );
}

export default App;
