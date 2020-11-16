import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getProfileThunkCreator } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {

  componentDidMount() {
    let { userId } = this.props.match.params;
    if (!userId) userId = 12444;
    this.props.getProfileThunkCreator(userId)
  }

  render() {
    return (
      <Profile userProfile={this.props.userProfile}/>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  }
}

export default compose(
  connect(mapStateToProps, { getProfileThunkCreator }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
