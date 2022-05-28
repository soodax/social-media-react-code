import './App.css';
import './nullstyle.css';
import React, { useEffect } from 'react';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initialization } from './redux/appReducer';
import Preloader from './components/Common/Preloader/Preloader';


//imports for lazy loading
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

const App = (props) => {
  useEffect(() => {
    props.initialization();
  }, [])

  if (!props.isInitialized) {
    return <Preloader />
  }

  return (
    <div className='wrapper'>
      <HeaderContainer />
      <Nav />
      <div className='wrapper__main'>
        <React.Suspense fallback={<Preloader />}>
          <Routes>
            <Route path='/profile/' element={<ProfileContainer />} />
            <Route path='/profile/:id' element={<ProfileContainer />}></Route>
            <Route path='/users' element={<UsersContainer />}></Route>
            <Route path='/dialogs/*' element={<DialogsContainer />}></Route>
            <Route path='/news/*' element={<News />}></Route>
            <Route path='/music/*' element={<Music />}></Route>
            <Route path='/settings/*' element={<Settings />}></Route>
            <Route path='*' element={<Navigate to="/profile" replace />}></Route>
            <Route path='/login/*' element={<Login />}></Route>
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

export default connect(mapStateToProps, {
  initialization
})(App);
