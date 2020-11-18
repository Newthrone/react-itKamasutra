import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getProfileThunkCreator, getUserStatusTC, updateUserStatusTC, setProfileStatus } from '../../redux/profile-reducer';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {


  requestProfileData() {
    let { userId } = this.props.match.params;
    this.props.getProfileThunkCreator(userId);
    this.props.getUserStatusTC(userId);
  }

  componentDidMount() {
    this.requestProfileData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) this.requestProfileData();
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
  }
}

export default compose(
  connect(mapStateToProps, { getProfileThunkCreator, getUserStatusTC, updateUserStatusTC, setProfileStatus }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer);
