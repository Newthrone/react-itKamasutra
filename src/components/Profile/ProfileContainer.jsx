import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getProfileThunkCreator, setUserProfile, getUserStatusTC, updateUserStatusTC, setProfileStatus } from '../../redux/profile-reducer';
import { compose } from 'redux';

class ProfileContainer extends Component {


  requestProfileData(userId) {
    this.props.getProfileThunkCreator(userId);
    this.props.getUserStatusTC(userId);
  }

  checkWhatLoad() {
    let { userId } = this.props.match.params;
    if (userId) {
      this.requestProfileData(userId);
    } else if (this.props.isAuth) {
      this.requestProfileData(this.props.authId);
    } else this.props.history.push('/404');
  }

  componentDidMount() {
    this.checkWhatLoad();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) this.checkWhatLoad();
  }

  render() {
    const isOwnProfile = this.props.authId === this.props.userProfile?.userId;

    return (
      <Profile isOwnProfile={isOwnProfile}
               userProfile={this.props.userProfile}
               profileStatus={this.props.profileStatus}
               hasErrorUpdateStatus={this.props.hasErrorUpdateStatus}
               updateUserStatusTC={this.props.updateUserStatusTC}
               setProfileStatus={this.props.setProfileStatus} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    profileStatus: state.profilePage.profileStatus,
    hasErrorUpdateStatus: state.profilePage.hasErrorUpdateStatus,
    authId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { getProfileThunkCreator, setUserProfile, getUserStatusTC, updateUserStatusTC, setProfileStatus }),
  withRouter,
)(ProfileContainer);


// 1 поменять инфо о пользователе при переключении пользователя +
// 2 если нет id и есть авторизация, показать авторизированный профиль +
// 3 если нет id и нет авторизации, сделать редирект на 404 или Login +
// 4 если есть id а пользователя на сервере нет надо показать что пользователь не найден и вернуть на какую либо страницу -

// Проблема в том что надо подождать ответ авторизации с сервера - значит в редаксе должен быть флаг пришёл ответ или нет
//
