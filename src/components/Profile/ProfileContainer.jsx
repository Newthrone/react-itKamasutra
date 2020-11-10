import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
