import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import SidebarContainer from './components/Sidebar/SidebarContainer.jsx';
import UsersContainer from './components/Users/UsersContainer';

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
            <Route exact path='/' render={() => (
              <Profile/>
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
