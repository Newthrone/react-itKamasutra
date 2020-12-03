import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { initializeApp } from './redux/app-reducer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer.jsx';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Error404 from './components/Errors/404.jsx'
import Preloader from './components/Common/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader />

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
              <Redirect exact from='/' to='login'/>
              <Route path="*" component={Error404} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized,
  }
}

export default connect(mapStateToProps, {initializeApp})(App);
