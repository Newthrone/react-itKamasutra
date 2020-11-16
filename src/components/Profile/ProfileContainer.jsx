import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getProfileThunkCreator } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  }
}

export default connect(mapStateToProps, { getProfileThunkCreator })(withUrlDataContainerComponent);
