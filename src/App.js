import './App.scss';
import React from 'react';
import UploadPage from './pages/UploadPage/UploadPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/video/:videoId' component={HomePage} />
          <Route path='/upload' component={UploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
