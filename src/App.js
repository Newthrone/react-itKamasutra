import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer.jsx';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  // console.log('props', props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SidebarContainer/>
        <div className="app-wrapper-content">
          <Switch>
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/profile' render={() => (
              <ProfileContainer/>
            )} />
            <Route path='/users' render={() => (
                <UsersContainer />
            )} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
