import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer';
import { getProfileUser } from '../../api/api';

class ProfileContainer extends Component {

  componentDidMount() {
    let { userId } = this.props.match.params;
    if (!userId) userId = 12444;
    getProfileUser(userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
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

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);
