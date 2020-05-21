import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Blog from './components/Blog/Blog';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-wrapper__header'>
          <Header />
        </div>
        <div className='app-wrapper__main'>
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/news' component={News} />
            <Route path='/blog' component={Blog} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
