import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer.jsx';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  // console.log('props', props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <SidebarContainer/>
        <div className="app-wrapper-content">
          <Switch>
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/profile/:userId?' render={() => (
              <ProfileContainer/>
            )} />
            <Route path='/users' render={() => (
                <UsersContainer />
            )} />
            <Route path='/login' render={() => (
                <Login />
            )} />
            <Redirect from='/' to='login'/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
