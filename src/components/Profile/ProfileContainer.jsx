import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends Component {

  componentDidMount() {
    let { userId } = this.props.match.params;
    if (!userId) userId = 12444;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
